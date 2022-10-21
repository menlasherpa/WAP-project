const express = require('express');
const app = express();
app.get('/', (req, res) => {
  let name = req.query.name;
  let age = req.query.age;

  if (!name) {
    name = "Lakpa";
  }

  if(!age) {
    age = 25;
  }

  res.send(`Welcome ${name} and age is ${age}`);
});

app.listen(3000);
