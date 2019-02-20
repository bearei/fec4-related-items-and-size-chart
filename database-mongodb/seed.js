const mongoose = require('mongoose');
const db = require('./index.js');
const faker = require('faker');
const Product = require('./Product.js');
const Pav = require('./Pav.js');


function generateProductChart() {
  const bodyParts = ['Chest', 'Sleeve Length', 'Waist', 'Inseam'];
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  let aProd = {};
  const chart = [];

  bodyParts.forEach((elementP) => {
    sizes.forEach((elementS) => {
      aProd.bodyPart = elementP;
      aProd.size = elementS;
      aProd.measurement = faker.random.number({
        min: 26,
        max: 52,
      });
      chart.push(aProd);
      aProd = {};
    });
  });
  return chart;
}

const productChart = generateProductChart();

const insertProductChart = () => {
  Product.create(productChart)
    .then(() => mongoose.connection.close());
};

insertProductChart();

/* ****************PeopleAlsoViewed************************ */

function PAVFactory() {
  const pav = {};

  pav.link_to_image = faker.image.imageUrl(140, 140, 'fashion');
  pav.star_rating = faker.random.number({
    min: 0,
    max: 100,
  });
  pav.review_count = faker.random.number({
    min: 1,
    max: 100,
  });
  pav.short_description = faker.commerce.productName();
  pav.price = faker.commerce.price();

  return pav;
}
const pavArray = [];

for (let i = 0; i < 100; i++) {
  pavArray.push(PAVFactory());
}

const insertPavs = () => {
  Pav.create(pavArray)
    .then(() => mongoose.connection.close());
};

insertPavs();

module.exports.insertProductChart = insertProductChart;
module.exports.insertPavs = insertPavs;
