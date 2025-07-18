const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

let products = [
  { id: 1, name: 'HP Laptop', price: 1000 },
  { id: 2, name: 'Samsung Mobile', price: 800 },
  { id: 3, name: 'Headphones', price: 250 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/items', (req, res) => {
  res.json(data);
});

app.post('/api/items', (req, res) => {
  const newItem = {
    id: data.length + 1,
    name: req.body.name,
  };
  data.push(newItem);
  res.json(newItem);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
