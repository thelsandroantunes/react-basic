const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('NPM');
});


app.listen(3000, function () {
  console.log('ouvindo npm na porta 3000');
});