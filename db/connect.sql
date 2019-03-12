USE sdc;

DROP TABLE IF EXISTS pavs;
DROP TABLE IF EXISTS newproducts;
DROP TABLE IF EXISTS sizes;

CREATE TABLE newproducts (product_name TEXT, id INT auto_increment primary key);
CREATE TABLE sizes (bodyPart VARCHAR(20), size VARCHAR(30), measurement INT, id INT auto_increment primary key);
CREATE TABLE pavs (link_to_image TEXT, star_rating INT, review_count INT, short_description TEXT, price DECIMAL, product_id INT, id INT auto_increment primary key);
CREATE INDEX idx_product on pavs (product_id);

LOAD DATA LOCAL INFILE 'db//s3test/fakePAVs0.csv'
INTO TABLE pavs
FIELDS TERMINATED BY ',';

LOAD DATA LOCAL INFILE 'db/s3test/fakePAVs1.csv'
INTO TABLE pavs
FIELDS TERMINATED BY ',';

LOAD DATA LOCAL INFILE 'db/s3test/fakePAVs2.csv'
INTO TABLE pavs
FIELDS TERMINATED BY ',';

LOAD DATA LOCAL INFILE 'db/s3test/fakePAVs3.csv'
INTO TABLE pavs
FIELDS TERMINATED BY ',';

LOAD DATA LOCAL INFILE 'db/s3test/fakeProducts.csv'
INTO TABLE newproducts
FIELDS TERMINATED BY ',';

LOAD DATA LOCAL INFILE 'db/s3test/fakeSizeChart.csv'
INTO TABLE sizes
FIELDS TERMINATED BY ',';