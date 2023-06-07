const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controller/productsController");
const productsPostValidation = require("../middlewares/productsMiddleware");

//get All
productsRouter.get("/", productsController.getAll);

//get  by ID
productsRouter.get("/:id", productsController.getByID);

//post
productsRouter.post("/", productsPostValidation, productsController.post);

//delete
productsRouter.delete("/:id", productsController.delete);

//edit
productsRouter.put("/:id", productsController.edit);

module.exports = productsRouter;