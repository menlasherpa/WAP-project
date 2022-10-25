const express = require('express');
const session = require("express-session");

const path = require("path");
const Product = require("./model/product");
const Cart = require("./model/cart");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.urlencoded({
  extended: false
}));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "this is salt"
}));

app.get("/", function(req, res) {
  res.render("product", {
    products: Product.getAllProducts()
  });
});

app.get("/cart", function(req, res) {
  let cart = new Cart();
  console.log(req.session);
  for (let prodId in req.session) {
    if (!isNaN(prodId)) {
      cart.add(Product.getAllProducts()[parseInt(prodId)], req.session[prodId]);
    }
  }
  res.render("cart", {
    cart: cart
  });
});


app.post("/addtocart", function(req, res) {
  req.session[req.body.productId] = (req.session[req.body.productId] || 0) + 1;
  res.redirect(303, "back");
});

app.listen(3000);
