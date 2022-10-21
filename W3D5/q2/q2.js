const express = require("express");
const app = express();

app.use(express.urlencoded({
  extended: false
}));

app.get("/", (req, res) => {
  res.send(`
    <form method="post" action="/add">
      <label> Name </label>
      <input type="text" name="name"></input>
      <label> Age </label>
      <input type="text" name="age"></input>
      <button type="submit"> Submit Query </button>
    </form>
  `);
});

app.post("/add", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  console.log(`Name is ${name} and age is ${age}`);
  res.send(`Name is ${name} and age is ${age}`);
});

app.listen(3000);
