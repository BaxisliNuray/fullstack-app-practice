const UsersModel = require("../models/usersModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        res.json({ message: "you need token to get data!" });
    } else {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "authentication failed" });
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};

//register

const usersController = {
    postRegister: async (req, res) => {
        const { username, email, password, basketItems } = req.body;

        const existedUsername = await UsersModel.findOne({ username: username });
        const existedMail = await UsersModel.findOne({ email: email });

        if (existedUsername) {
            res.json({ message: "username already existed" });
            return;
        }
        if (existedMail) {
            res.json({ message: "email already used" });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new UsersModel({
            username: username,
            email: email,
            password: hashedPassword,
            isAdmin: false,
            basketItems: basketItems,
        });

        await newUser.save();
        res.json({ message: "user sign up succesfully" });
    },

    //login
    postLogin: async (req, res) => {
        const { username, password } = req.body;
        const existedUsername = await UsersModel.findOne({ username: username });

        if (!existedUsername) {
            res.json({ auth: false, message: "username not found" });
            return;
        } else {
            const isValid = await bcrypt.compare(password, existedUsername.password);
            const id = existedUsername._id;
            const token = jwt.sign({ id: id }, process.env.SECRET_KEY, {
                expiresIn: "7d",
            });
            if (!isValid) {
                res.json({ auth: false, message: "password is incorrect" });
            } else {
                res.json({
                    auth: true,
                    token: token,
                    user: {
                        id: existedUsername._id,
                        username: existedUsername.username,
                        email: existedUsername.email,
                        isAdmin: existedUsername.isAdmin,
                        basketItems: existedUsername.basketItems,
                    },
                    message: "signed in succesfully",
                });
            }
        }
    },

    getAllUsers: async (req, res) => {
        const users = await UsersModel.find();
        res.json({ users: users });
    },
};

module.exports = usersController;