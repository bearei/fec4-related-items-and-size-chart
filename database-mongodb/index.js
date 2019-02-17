const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/products';
const Product = require('./Product.js');
const Pav = require('./Pav.js');

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
});

const fetchChartFromDB = () => {
  const query = Product.find({});
  return query;
};

const fetchFourRandomPAVsFromDB = () => {
  const collection = Pav.aggregate(
    [{
      $sample: {
        size: 4,
      },
    }],
  );
  return collection;
};

module.exports.db = db;
module.exports.fetchChartFromDB = fetchChartFromDB;
module.exports.fetchFourRandomPAVsFromDB = fetchFourRandomPAVsFromDB;
