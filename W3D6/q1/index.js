const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
  const date = new Date();
  res.render("index", {
    time: date.toTimeString(),
    day: date.getHours() > 6 && date.getHours() < 18
  });
});

app.listen(3000);
