//jshint esversion:6

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));

const products = require(path.join(__dirname, "products/products"));

app.get("/", function (req, res) {
  res.render("home", {
    topProducts: [products[0][1], products[0][2], products[0][4]],
  });
});

app.get("/products", function (req, res) {
  res.render("products", {
    products: products,
  });
});

app.get("/contact", function (req, res) {
  res.render("contactUs");
});

function findProduct(proID) {
  var temp = 0;
  for (var i = 0; i < products.length; i++) {
    if (products[i].find((sub) => sub.id === proID)) {
      temp = products[i].find((sub) => sub.id === proID);
      break;
    } else {
      temp = 0;
    }
  }
  return temp;
}

app.get("/products/:id", function (req, res) {
  const temp = findProduct(Number(req.params.id));
  if (temp) {
    res.render("product", {
      product: temp,
    });
  } else {
    res.send("<h1>Error 404: Page not found</h1>");
  }
});

app.get("/catalogue", (req, res) => {
  res.sendFile(path.join(__dirname, "products/catalogue.pdf"));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started.");
});
