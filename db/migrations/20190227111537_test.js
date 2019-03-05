
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('products', function(table) {
            table.increments('id').primary();
            table.string('bodyPart');
            table.string('size');
            table.integer('measurement');
        }),

        knex.schema.createTable('pav', function(table) {
            table.increments('id').primary();
            table.string('link_to_image');
            table.integer('star_rating');
            table.integer('review_count');
            table.text('short_description');
            table.decimal('price');
            table.integer('product_id');
        })
    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('products'),
      knex.schema.dropTable('pav')
  ]);
};
  