const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
dotenv.config()