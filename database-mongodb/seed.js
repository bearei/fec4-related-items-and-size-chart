const db = require('./index.js');
const faker = require('faker');
const Product = require('./Product.js');
const Pav = require('./Pav.js');
const mongoose = require('mongoose');

function generateProductChart() {
  const bodyParts = ['Chest', 'Sleeve Length', 'Waist', 'Inseam'];
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL'];

  let aProd = {};
  let chart = [];

  bodyParts.forEach(elementP => {
    sizes.forEach(elementS => {
      aProd['bodyPart'] = elementP;
      aProd['size'] = elementS;
      aProd['measurement'] = faker.random.number({min: 26, max: 48});
    chart.push(aProd);
    aProd = {};
    });
  });
  return chart;
}

let productChart = generateProductChart();

const insertProductChart = function(){
    Product.create(productChart)
    .then(()=> mongoose.connection.close());
}

insertProductChart();

/******************PeopleAlsoViewed************************ */

function PAVFactory() {
  let pav = {};

  pav['link_to_image'] = faker.image.fashion();
  pav['star_rating'] = faker.random.number({min: 0, max: 5});
  pav['review_count'] = faker.random.number({min: 0, max: 100});
  pav['short_description'] = faker.commerce.productName();
  pav['price'] = faker.commerce.price();

  return pav;
}
let pavArray = [];

for (let i = 0; i < 100; i++) {
  pavArray.push(PAVFactory());
}

const insertPavs = function() {
  Pav.create(pavArray)
    .then(() => mongoose.connection.close());
};

 insertPavs();

module.exports.insertProducts;
module.exports.inserPavs;