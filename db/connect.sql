USE testdb;

DROP TABLE IF EXISTS pavs;
DROP TABLE IF EXISTS newproducts;
DROP TABLE IF EXISTS sizechart;

CREATE TABLE newproducts (product_name TEXT, id INT auto_increment primary key);
CREATE TABLE sizechart (bodyPart VARCHAR(20), size VARCHAR(30), measurement INT, id INT auto_increment primary key);
CREATE TABLE pavs (link_to_image TEXT, star_rating INT, review_count INT, short_description TEXT, price DECIMAL, product_id INT, id INT auto_increment primary key);

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

LOAD DATA LOCAL INFILE 'db/fakeProducts.csv'
INTO TABLE newproducts
FIELDS TERMINATED BY ',';

LOAD DATA LOCAL INFILE 'db/fakeSizeChart.csv'
INTO TABLE sizechart
FIELDS TERMINATED BY ',';

CREATE INDEX idx_product on pavs ('product_id');