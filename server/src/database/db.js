const mongoose = require("mongoose");
require("dotenv").config();

const db = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("Connect to mongoDB");
    })
    .catch((error) => console.log(error));
};
module.exports = db;
