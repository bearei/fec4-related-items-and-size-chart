const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/products';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
});

module.exports = db;