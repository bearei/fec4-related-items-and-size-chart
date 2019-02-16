const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  bodyPart: String,
  size: String,
  measurement: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
// module.exports.create = create;