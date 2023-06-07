const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controller/usersController");

//get id
usersRouter.get("/:id", usersController.getAllUsers);

//get All
usersRouter.post("/", usersController.postRegister);

//post
usersRouter.post("/", usersController.postLogin);

module.exports = usersRouter;