const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/products';
const Product = require('./Product.js');
const Pav = require('./Pav.js');
const db = mongoose.connect(mongoUri, {useNewUrlParser: true});

let fetchChartFromDB = () => {
  let query = Product.find({}).limit(24);
  return query;
}

let fetchFourRandomPAVsFromDB = ()=> {
  let collection = Pav.aggregate(
   [ { $sample: { size: 4 } } ]
);
return collection;
}

module.exports.db = db;
module.exports.fetchChartFromDB = fetchChartFromDB;
module.exports.fetchFourRandomPAVsFromDB = fetchFourRandomPAVsFromDB;
