const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(
      process.env.DB_CONNECTION.replace("<password>", process.env.DB_PASSWORD)
    )
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connectDB;