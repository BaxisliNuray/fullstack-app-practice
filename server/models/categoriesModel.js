const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    name: String,
    price: Number,
    imageURL: String,
    description: String,
    categoryID: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
})

const CategoriesModel = mongoose.model("CategoriesModel", CategoriesSchema)

module.exports = CategoriesModel;
