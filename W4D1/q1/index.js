const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("form", {
    cookie: req.cookies
  });
});

app.post("/add", (req, res) => {
  const key = req.body.key;
  const value = req.body.value;
  res.cookie(key, value);
  res.redirect("back");
});

app.listen(3000);
