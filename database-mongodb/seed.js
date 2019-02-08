const db  = require('./index.js');
const faker = require('faker');
const Product = require('./Product.js');



const insertProducts = function() {
  Product.create(*faker data*)
    .then(() => db.disconnect());
};

insertProducts();