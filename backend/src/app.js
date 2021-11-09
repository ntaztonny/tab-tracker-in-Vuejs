const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//setup

const port = process.env.PORT || 8081;
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

//routes

app.get("/status", (req, res) => {
  res.send("Server is up and running!!");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
