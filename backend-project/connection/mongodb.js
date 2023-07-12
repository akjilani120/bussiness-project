// import mongoose from "mongoose";
require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.MONGODB_DATABASE;
exports.connectToMongoDb = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongodb connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
