const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const pavSchema = new mongoose.Schema({
  link_to_image: String,
  star_rating: Number,
  review_count: Number,
  short_description: String,
  price: Number,
});

const Pav = mongoose.model('Pav', pavSchema);

module.exports = Pav;
