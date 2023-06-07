const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const SliderSchema = new Schema({
    name: String,
    imageUrl:String
})

const SliderModel = mongoose.model("SliderModel", SliderSchema)

module.exports = SliderModel;