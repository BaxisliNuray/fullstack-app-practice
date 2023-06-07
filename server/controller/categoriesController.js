const CategoriesModel = require("../models/categoriesModel")


const categoriesController = {
    //post
    post: async (req, res) => {
        const { name } = req.body;
        const newCategory = new CategoriesModel({
            name: name,
        });
        await newCategory.save();
        res.status(201).send("created");
    },
    //getAll datas
    getAll: async (req, res) => {
        const { name } = req.query;
        let FilteredData
        const AllCategories = await CategoriesModel.find();
        if (!name) {
            res.status(200).send(AllCategories)
        } else {
            FilteredData = AllCategories.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim()))
            res.status(200).send(FilteredData);
        }
    },
    //get by id
    getById: async (req, res) => {
        const id = req.params.id;
        const SingleCategory = await CategoriesModel.findById(id);
        if (!SingleCategory) {
            res.status(204).send("category not found!");
        } else {
            res.status(200).send(SingleCategory)
        }
    },

    //delete
    delete: async (req, res) => {
        const { id } = req.params;
        const deletedCategory = await CategoriesModel.findByIdAndDelete(id);
        await CategoriesModel.deleteMany({ sliderID: id });
        if (!deletedCategory) {
            res.status(404).send("category not found");
        } else {
            res.status(203).send(deletedCategory)
        }
    },
    //edit
    edit: async (req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        const editCategory = await CategoriesModel.findByIdAndUpdate(id, {
            name: name,
        });
        if (!editCategory) {
            res.status(404).send("category not found!");
        } else {
            res.status(200).send(`${name} updated successfully!`);
        }
    },


}
module.exports = categoriesController