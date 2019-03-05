drop keyspace if exists test;

create keyspace test with replication = { 'class': 'SimpleStrategy', 'replication_factor': 1 };

use test;

create table products (id int primary key, bodyPart varchar, size varchar, measurement int);
create table pav (id int primary key, link_to_image varchar, star_rating int, review_count int, short_description varchar, price decimal, product_id int);

copy test.products (id, bodyPart, size, measurement) from './db/fakeProducts.csv' with Header = true;
copy test.pav (id, link_to_image, star_rating, review_count, short_description, price, product_id) from './db/fakePAVs0.csv' with Header=true;
copy test.pav (id, link_to_image, star_rating, review_count, short_description, price, product_id) from './db/fakePAVs1.csv' with Header=true;
copy test.pav (id, link_to_image, star_rating, review_count, short_description, price, product_id) from './db/fakePAVs2.csv' with Header=true;
copy test.pav (id, link_to_image, star_rating, review_count, short_description, price, product_id) from './db/fakePAVs3.csv' with Header=true;
