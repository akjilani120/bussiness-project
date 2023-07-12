const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToMongoDb } = require("./connection/mongodb");
const port = 2001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});
connectToMongoDb();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
