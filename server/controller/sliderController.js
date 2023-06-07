const SliderModel=require("../models/sliderModel")

const sliderController = {
    //post
    post: async (req, res) => {
        const { name,imageUrl } = req.body;
        const newSlider = new SliderModel({
            name: name,
            imageUrl:imageUrl
        });
        await newSlider.save();
        res.status(201).send("created");
    },
    //getAll datas
    getAll: async (req, res) => {
        const { name } = req.query;
        let FilteredData
        const AllSliders = await SliderModel.find();
        if (!name) {
            res.status(200).send(AllSliders)
        } else {
            FilteredData = AllSliders.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim()))
            res.status(200).send(FilteredData);
        }
    },
    //get by id
    getById: async (req, res) => {
        const id = req.params.id;
        const SingleSlider = await SliderModel.findById(id);
        if (!SingleSlider) {
            res.status(204).send("slider not found!");
        } else {
            res.status(200).send(SingleSlider)
        }
    },

    //delete
    delete: async (req, res) => {
        const { id } = req.params;
        const deletedSlider = await SliderModel.findByIdAndDelete(id);
        await SliderModel.deleteMany({ sliderID: id });
        if (!deletedSlider) {
            res.status(404).send("slider not found");
        } else {
            res.status(203).send(deletedSlider)
        }
    },
    //edit
    edit: async (req, res) => {
        const { id } = req.params;
        const { name,imageUrl } = req.body;
        const editSlider = await SliderModel.findByIdAndUpdate(id, {
            name: name,
            imageUrl:imageUrl
        });
        if (!editSlider) {
            res.status(404).send("slider not found!");
        } else {
            res.status(200).send(`${name} updated successfully!`);
        }
    },


}
module.exports = sliderController