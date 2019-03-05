// const csvWriter = require('csv-write-stream');
// const writer = csvWriter({sendHeaders: false});
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const fs = require('fs');
const faker = require('faker');
const bodyParts = ['Chest', 'Sleeve Length', 'Waist', 'Inseam'];
const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

const createFakeProduct = (id) => ({
  id: id,
  bodyPart: faker.random.arrayElement(bodyParts),
  size: faker.random.arrayElement(sizes),
  measurement: faker.random.number({ min: 26, max: 52 })
});
const createFakePAV = (productId, id) => ({
  id: id,
  link_to_image: faker.image.fashion(),
  star_rating: faker.random.number({ min: 0, max: 100 }),
  review_count: faker.random.number({ min: 1, max: 100 }),
  short_description: faker.commerce.productName(),
  price: faker.commerce.price(),
  product_id: productId
});

for (var i = 0; i < 10; i++) {
  var fakeProducts = [];
  
  for (var j = 0; j < 1000000; j++) {
    fakeProducts.push(createFakeProduct(i * 1000000 + j + 1));
  }
  
  var pathway = path.join(__dirname, `./fakeProducts.csv`);
  const csvWriter = createCsvWriter({
    path: pathway,
    header: [
        {id: 'id', title: 'id'},
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

var count = 0;
for (var v = 0; v < 4; v ++) {
  for (var m = 0; m < 10 ; m++) {
    var fakePAVs = [];
    for (var n = 0; n < 1000000; n++) {
      // var variance = faker.random.number({ min: 2, max: 5});
  
      count += 1;
      fakePAVs.push(createFakePAV((m * 1000000) + n + 1, count));
    }
  
    var pathway = path.join(__dirname, `./fakePAVs${v}.csv`);
    const csvWriter = createCsvWriter({
      path: pathway,
      header: [
          {id: 'id', title: 'id'},
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


// for (var m = 0; m < 50 ; m++) {
//   var fakePAVs = [];
//   for (var n = 0; n < 100000; n++) {
//     // var variance = faker.random.number({ min: 2, max: 5});

//     for (var o = 0; o < 4; o++) {
//       count += 1;
//       fakePAVs.push(createFakePAV((m * 100000) + n + 1, count));
//     }
//   }

//   var pathway = path.join(__dirname, `./fakePAVs.csv`);
//   const csvWriter = createCsvWriter({
//     path: pathway,
//     header: [
//         {id: 'id', title: 'id'},
//         {id: 'link_to_image', title: 'link_to_image'},
//         {id: 'star_rating', title: 'star_rating'},
//         {id: 'review_count', title: 'review_count'},
//         {id: 'short_description', title: 'short_description'},
//         {id: 'price', title: 'price'},
//         {id: 'product_id', title: 'product_id'}
//       ],
//     append:true
//   });

//   csvWriter  
//   .writeRecords(fakePAVs)
//     .then(()=> console.log('The CSV file was written successfully'));
// }













// Multiple csvs for the primary records
// for (var i = 0; i < 10; i++) {
//   var fakeProducts = [];
  
//   for (var j = 0; j < 1000000; j++) {
//     fakeProducts.push(createFakeProduct(i * 1000000 + j + 1));
//   }
  
//   var pathway = path.join(__dirname, `./fakeProducts${i}.csv`);
//   const csvWriter = createCsvWriter({
//     path: pathway,
//     header: [
//         {id: 'id', title: 'id'},
//         {id: 'bodyPart', title: 'bodyPart'},
//         {id: 'size', title: 'size'},
//         {id: 'measurement', title: 'measurement'}
//       ]
//   });

//   csvWriter  
//   .writeRecords(fakeProducts)
//     .then(()=> console.log('The CSV file was written successfully'));
// }
