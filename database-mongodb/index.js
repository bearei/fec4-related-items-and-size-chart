const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/8080';
var autoIncrement = require('mongoose-auto-increment');

const db = mongoose.connect(mongoUri);




module.exports = db;