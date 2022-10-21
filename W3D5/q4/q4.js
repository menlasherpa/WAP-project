const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({
  extended: false
}));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  res.send(`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title> Form </title>
        <link rel="stylesheet" href= "${hour>6 && hour<18 ? 'css/day.css' : 'css/night.css'}">
      </head>
      <body>
        <form method="post" action="/result">
          <label> Name </label>
          <input type="text" name="name"></input>
          <label> Age </label>
          <input type="text" name="age"></input>
          <button type="submit"> Submit Query </button>
        </form>
      </body>
    </html>
    `)
});

app.get("/output", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  res.send(`Name is ${name} and age is ${age}`);
});

app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  res.redirect(`/output?name=${name}&age=${age}`);
});

app.listen(3000);
