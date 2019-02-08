const express = require('express');
const db = require('../database-mongodb/index.js');
const Product = require('../database-mongodb/Product.js');

const app = express();
const PORT = 3002;


app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/product:id/sizechart', function(req, res) {
  db.fetchFromDB()
    .then((product) => res.send(product));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log(__dirname + '/../client/dist');
});
