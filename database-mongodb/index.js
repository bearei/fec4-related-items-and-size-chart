const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/products';
const autoIncrement = require('mongoose-auto-increment');

const db = mongoose.connect(mongoUri, {useNewUrlParser: true});



module.exports = db;