const express = require("express");
const sliderRouter = express.Router();
const sliderController = require("../controller/sliderController");
const sliderPostValidation = require("../middlewares/sliderMiddleware");

//get All
sliderRouter.get("/", sliderController.getAll);

//get  by ID
sliderRouter.get("/:id", sliderController.getById);

//post
sliderRouter.post("/", sliderPostValidation, sliderController.post);

//delete
sliderRouter.delete("/:id", sliderController.delete);

//edit
sliderRouter.put("/:id", sliderController.edit);

module.exports = sliderRouter;