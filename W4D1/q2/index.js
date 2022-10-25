const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.urlencoded({
  extended: false
}));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "salt for cookie signing"
}));

app.get("/", (req, res) => {
  const date = new Date();
  res.render("form", {
    time: date.toTimeString(),
    day: date.getHours() > 6 && date.getHours() < 18
  });
});

app.get("/output", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  res.send(`Name is ${name} and age is ${age}`);
});

app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  req.session[name] = age;
  res.redirect(303, "/output");
});

app.listen(3000);
