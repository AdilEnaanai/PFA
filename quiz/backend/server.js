const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/questions', (req, res) => {
  res.send('Liste des questions');
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
}
);