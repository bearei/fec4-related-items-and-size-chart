const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  _id: Number,
  bodyPart: String,
  size: String,
  measurements: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;