const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: String,
    email: String,
    password: String,
    basketItems: {
        type: Array,
        default: [],
    }
})

const UsersModel = mongoose.model("ProductsModel", UsersSchema)

module.exports = UsersModel;
