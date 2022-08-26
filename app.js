const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const homeRoute = require("./routes/home");

const app = express();

// middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// routes
app.use("/api/homes", homeRoute);

// catch 404
app.use(function (req, res, next) {
  res.status(404).send();
});

// global error handler
app.use(function (err, req, res, next) {
  res.status(500).send();
});

// port number
const PORT = process.env.PORT || 5000;

// create a server
app.listen(PORT, () => console.log(`server started of port ${PORT}`));
