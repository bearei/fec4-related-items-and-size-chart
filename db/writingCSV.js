// const csvWriter = require('csv-write-stream');
// const writer = csvWriter({sendHeaders: false});
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const fs = require('fs');
const faker = require('faker');
const bodyParts = ['Chest', 'Sleeve Length', 'Waist', 'Inseam'];
const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

// Data generation for primary records
const createFakeProduct = () => ({
  product_name: faker.commerce.product(),
});

for (var i = 0; i < 10; i++) {
  var fakeProducts = [];

  for (var j = 0; j < 1000000; j++) {
    fakeProducts.push(createFakeProduct());
  }

  var pathway = path.join(__dirname, `./test.csv`);
  const csvWriter = createCsvWriter({
    path: pathway,
    header: [
      {id: 'product_name', title: 'product_name'}
    ],
    append:true
  });
  
  csvWriter  
    .writeRecords(fakeProducts)
    .then(()=> console.log('The CSV file was written successfully'));
}

// Data generation for size charts 
for (var i = 0; i < 1; i++) {
  var fakeProducts = [];
  
    let aProd = {};

    bodyParts.forEach((elementP) => {
      sizes.forEach((elementS) => {

        aProd.bodyPart = elementP;
        aProd.size = elementS;
        aProd.measurement = faker.random.number({
          min: 26,
          max: 52,
        });
        fakeProducts.push(aProd);
        aProd = {};
      });
    });
  
  var pathway = path.join(__dirname, `./test1.csv`);
  const csvWriter = createCsvWriter({
    path: pathway,
    header: [
      {id: 'bodyPart', title: 'bodyPart'},
      {id: 'size', title: 'size'},
      {id: 'measurement', title: 'measurement'}
    ],
    append:true
  });
  
  csvWriter  
  .writeRecords(fakeProducts)
  .then(()=> console.log('The CSV file was written successfully'));
}

// Data generation for the Products Also Viewed (PAV)
const createFakePAV = (productId, image) => ({
  star_rating: faker.random.number({ min: 0, max: 100 }),
  review_count: faker.random.number({ min: 1, max: 100 }),
  short_description: faker.commerce.productName(),
  price: faker.commerce.price(),
  link_to_image: `https://s3-us-west-1.amazonaws.com/hreipavs/${image}.jpg`,
  product_id: productId
});

var image;
for (var v = 0; v < 1; v ++) {
  for (var m = 0; m < 10 ; m++) {
    var fakePAVs = [];
    for (var n = 0; n < 10; n++) {
      image = Math.floor(Math.random() * 100 + 1);
      fakePAVs.push(createFakePAV((m * 10) + n + 1, image));
    }
  
    var pathway = path.join(__dirname, `./test${v}.csv`);
    const csvWriter = createCsvWriter({
      path: pathway,
      header: [
          {id: 'link_to_image', title: 'link_to_image'},
          {id: 'star_rating', title: 'star_rating'},
          {id: 'review_count', title: 'review_count'},
          {id: 'short_description', title: 'short_description'},
          {id: 'price', title: 'price'},
          {id: 'product_id', title: 'product_id'}
        ],
      append:true
    });
  
    csvWriter  
    .writeRecords(fakePAVs)
      .then(()=> console.log('The CSV file was written successfully'));
  }
}