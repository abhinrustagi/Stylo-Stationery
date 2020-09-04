const express= require("express");
// const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

// mongoose.connect("mongodb://localhost:27017/stationeryDB", {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:false});

//yet to decide the schema

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/products", (req, res) => {
  res.sendFile(__dirname + "/products.html")
});

app.get("/knowUs", (req, res) => {
  res.sendFile(__dirname + "/knowUs.html");
});

app.get("/knowUs", (req, res) => {
  res.sendFile(__dirname + "/knowus.html");
});

app.get("/search", (req,res)=>{
  res.render("productSearch");
})

app.listen( process.env.PORT || 3000 ,() => {
  console.log("Server started.");
})
