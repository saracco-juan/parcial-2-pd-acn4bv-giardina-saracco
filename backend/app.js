const express = require('express');

const app = express();
const port = 3000;

const tipografias = [
  { "id": 1, "nombre": "Sansation" },
  { "id": 2, "nombre": "Playfair Display" },
  { "id": 3, "nombre": "Roboto" },
  { "id": 4, "nombre": "Montserrat" }
]

app.get('/', (req, res) => {
  res.send('Hola soy juan:)');
});

app.get('/api/fonts', (req, res) => {
  res.json(tipografias);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});