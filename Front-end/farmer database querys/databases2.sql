CREATE TABLE IF NOT EXISTS  users (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
name TEXT NOT NULL,
password text NOT NULL,
nationalid LONG unique NOT NULL,
email text NOT NULL,
phone text NOT NULL,
job text NOT NULL,
status text NOT NULL,
card integer,
FOREIGN KEY (card) REFERENCES cards(id)
);

CREATE TABLE IF NOT EXISTS  prices (
id PRIMARY KEY AUTOINCREMENT NOT NULL,
product_name text NOT NULL,
city_id integer NOT NULL,
min_price DOUBLE NOT NULL,
max_price DOUBLE NOT NULL,
FOREIGN KEY (city_id) REFERENCES cities(id)
);

CREATE TABLE IF NOT EXISTS  farms_products (
id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
farm_id integer NOT NULL,
product_id integer NOT NULL,
FOREIGN KEY (farm_id) REFERENCES farms(id),
FOREIGN KEY (product_id) REFERENCES products(id),
);

CREATE TABLE IF NOT EXISTS  products (
id PRIMARY KEY AUTOINCREMENT NOT NULL,
quantity integer NOT NULL,
price_id DOUBLE NOT NULL,
FOREIGN KEY (price_id) REFERENCES prices(id)
);

CREATE TABLE IF NOT EXISTS  farms (
id PRIMARY KEY AUTOINCREMENT NOT NULL,
name text NOT NULL,
lat DOUBLE NOT NULL,
LONG DOUBLE NOT NULL,
city_id integer NOT NULL,
farmer_id integer NOT NULL,
FOREIGN KEY (farmer_id) REFERENCES users(id)
FOREIGN KEY (city_id) REFERENCES cities(id)
);

CREATE TABLE IF NOT EXISTS  cities (
id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
name text NOT NULL,
);

CREATE TABLE IF NOT EXISTS  stores (
id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
store_name text NOT NULL,
lat DOUBLE NOT NULL,
LONG DOUBLE NOT NULL,
merchant_id integer NOT NULL,
FOREIGN KEY (merchant_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS  posts (
id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
title text NOT NULL,
created TIMESTAMP default current_timestamp,
content text NOT NULL
);

CREATE TABLE IF NOT EXISTS  problems (
id integer PRIMARY KEY AUTOINCREMENT,
user_id integer NOT NULL,
product_id integer NOT NULL,
problem text NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS  cards (
id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
number LONG NOT NULL,
bin int NOT NULL
);