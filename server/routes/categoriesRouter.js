const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controller/categoriesController");
const categoriesPostValidation = require("../middlewares/categoriesMiddleware");


//post
categoriesRouter.post("/", categoriesPostValidation, categoriesController.post);

//get All
categoriesRouter.get("/", categoriesController.getAll);

//get  by ID
categoriesRouter.get("/:id", categoriesController.getById);

//delete
categoriesRouter.delete("/:id", categoriesController.delete);

//edit
categoriesRouter.put("/:id", categoriesController.edit);

module.exports = categoriesRouter;