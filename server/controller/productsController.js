const ProductModel = require("../models/productsModel")
const uuid = require("uuid");
const fs = require("fs");
const multer = require("multer");

const DIR = "./uploads/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(" ").join("-");
        cb(null, uuid.v4() + "-" + fileName);
    },
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
});

const productController = {
    //post
    post: async (req, res) => {
        upload.single("image");
        const url = req.protocol + "://" + req.get("host");
        const { name, price, description, categoryID } = req.body;
        const newProduct = new ProductModel({
            name: name,
            price: price,
            imageURL: url + "/uploads/" + req.file.filename,
            description: description,
            categoryID: categoryID,
        });
        await newProduct.save();
        res.status(201).send("created");
    },
    //get all
    getAll: async (req, res) => {
        const { name } = req.query;
        const products = await ProductModel.find();
        let filteredData
        if (!name) {
            res.status(200).send({
                data: products,
                message: "data get success!",
            });
        } else {
            filteredData = products.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim()))

            res.status(200).send(filteredData)
        }
    },

    //get by id
    getByID: async (req, res) => {
        const { id } = req.params;
        const product = await ProductModel.findById(id);
        if (!product) {
            res.status(204).send("product not found!");
        } else {
            res.status(200).send(product);
        }
    },


    //delete
    delete: async (req, res) => {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        await ProductsModel.deleteMany({ sliderID: id });
        if (!deletedProduct) {
            res.status(404).send("product not found");
        } else {
            res.status(203).send(deletedProduct);
        }
    },
    //edit
    edit: async (req, res) => {
        const { id } = req.params;
        const { name, price, imageURL, description } = req.body;
        const existedProduct = await ProductModel.findByIdAndUpdate(id, {
            name: name,
            imageURL: imageURL,
            price: price,
            description: description,
        });
        if (!existedProduct) {
            res.status(404).send("product not found!");
        } else {
            res.status(200).send(`${name} updated successfully!`);
        }
    },
};

module.exports = productController;