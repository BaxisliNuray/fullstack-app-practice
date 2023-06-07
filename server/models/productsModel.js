const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: String,
    imageUrl: String,
    categoryId: String,
    price: Number,
    description: String

})

const ProductsModel = mongoose.model("ProductsModel", ProductsSchema)

module.exports = ProductsModel;






module.exports = ProductsModel;
