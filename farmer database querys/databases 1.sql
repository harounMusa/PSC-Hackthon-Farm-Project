DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS farms;
DROP TABLE IF EXISTS stores;
CREATE TABLE users (
id integer primary key autoincrement not null,
name text not null,
password text not null,
nationalid long unique not null,
email text not null,
phone text not null,
job text not null,
status text not null
);

create table prices (
id integer primary key autoincrement not null,
product_name text not null,
city_id integer not null,
min_price double not null,
max_price double not null,
foreign key (city_id) references cities(id)
);

create table farms_products (
id integer primary key autoincrement not null,
farm_id integer not null,
product_id integer not null,
foreign key (farm_id) references farms(id),
foreign key (product_id) references products(id),
);

create table products (
id integer primary key autoincrement not null,
quantity integer not null,
price_id integer not null,
foreign key (price_id) references prices(id)
);

create table farms (
id integer primary key autoincrement not null,
name text not null,
lat double not null,
long double not null,
city_id integer not null,
farmer_id integer not null,
foreign key (farmer_id) references users(id),
foreign key (city_id) references cities(id)
);

create table cities (
id integer primary key autoincrement not null,
name text not null,
);

create table posts (
id integer primary key autoincrement not null,
title text not null,
created TIMESTAMP default current_timestamp,
content text not null
);