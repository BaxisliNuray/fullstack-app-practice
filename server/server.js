const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const connectDB = require("./helper/connectDB")

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
dotenv.config()


connectDB()

app.get("/eCommerce", (req, res) => {
    res.send("Hello");
});

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});