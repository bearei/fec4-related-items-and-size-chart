USE testdb;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS pavs;

CREATE TABLE products (id INT, bodyPart VARCHAR(20), size VARCHAR(30), measurement INT);
CREATE TABLE pavs (id INT, link_to_image TEXT, star_rating INT, review_count INT, short_description TEXT, price DECIMAL, product_id INT);

LOAD DATA LOCAL INFILE 'db/fakeProducts.csv'
INTO TABLE products
FIELDS TERMINATED BY ',';

LOAD DATA LOCAL INFILE 'db/fakePAVs0.csv'
INTO TABLE pavs
FIELDS TERMINATED BY ',';

LOAD DATA LOCAL INFILE 'db/fakePAVs1.csv'
INTO TABLE pavs
FIELDS TERMINATED BY ',';

LOAD DATA LOCAL INFILE 'db/fakePAVs2.csv'
INTO TABLE pavs
FIELDS TERMINATED BY ',';

LOAD DATA LOCAL INFILE 'db/fakePAVs3.csv'
INTO TABLE pavs
FIELDS TERMINATED BY ',';