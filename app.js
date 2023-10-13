const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var logger = require("morgan");
var path = require("path");

cors = require("cors");

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));

const public = path.resolve(__dirname, "public");
app.use(express.static(public));

 app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

 if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

 const productRoutes = require("./routes/productRoutes");


 
 app.use("/api/products", productRoutes);



 
 
app.use(express.static(path.join(__dirname, "../frontend/build")));

  
app.set("views", path.join(__dirname, "views"));

module.exports = app;
