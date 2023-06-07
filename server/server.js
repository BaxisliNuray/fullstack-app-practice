const express = require('express')
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()

app.use(cors())
dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/cubics', (req, res) => {
    res.send('Hello World!')
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})