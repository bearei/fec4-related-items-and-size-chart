const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/products';
var autoIncrement = require('mongoose-auto-increment');

const db = mongoose.connect(mongoUri, {useNewUrlParser: true});



module.exports = db;