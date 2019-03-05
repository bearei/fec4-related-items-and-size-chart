const faker = require('faker');
const bodyParts = ['Chest', 'Sleeve Length', 'Waist', 'Inseam'];
const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
       
const createFakeProduct = () => ({
  id: id,
  bodyPart: faker.random.arrayElement(bodyParts),
  size: faker.random.arrayElement(sizes),
  measurement: faker.random.number({ min: 26, max: 52 })
});

const createFakePAV = (id) => ({
  link_to_image: faker.image.fashion(),
  star_rating: faker.random.number({ min: 0, max: 100 }),
  review_count: faker.random.number({ min: 1, max: 100 }),
  short_description: faker.commerce.productName(),
  price: faker.commerce.price(),
  product_id: id
});

exports.seed = async function(knex, Promise) {
  for (var i = 0; i < 1000000; i++) {
    var fakeProducts = [];
    for (var j = 0; j < 10; j++) {
      fakeProducts.push(createFakeProduct());
    }

    await knex('products')
      .insert(fakeProducts);
  }

  for (var m = 0; m < 1000000; m++) {
    var fakePAVs = [];
    for (var n = 0; n < 10; n++) {
      var variance = faker.random.number({ min: 2, max: 5});

      for (var o = 0; o < variance; o++) {
        fakePAVs.push(createFakePAV((m * 10) + n));
      }
    }

    await knex('pav')
      .insert(fakePAVs);
  }
};