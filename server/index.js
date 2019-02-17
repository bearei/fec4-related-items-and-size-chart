const express = require('express');
const db = require('../database-mongodb/index.js');
const Product = require('../database-mongodb/Product.js');
const path = require('path');

const app = express();
const PORT = 3002;


app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/product:id/sizechart', (req, res) => {
  db.fetchFromDB()
    .then((product) => res.send(product));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log(path.join(__dirname, '/../client/dist'));
});
