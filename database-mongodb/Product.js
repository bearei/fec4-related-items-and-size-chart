const mongoose = require('mongoose');

const db = require('./index.js');

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  bodyPart: String,
  size: String,
  measurement: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
