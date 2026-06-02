--CUSTOMER
create table customers(
    customer_id serial primary key,
    first_name varchar(20) not null,
    last_name varchar(20) not null,
    address_id int not null,
    foreign key (address_id) references address(address_id)
);

INSERT INTO customers (first_name, last_name, address_id)
VALUES
('Harshini', 'Ananthan', 1),
('Madhu', 'Priya', 2);

INSERT INTO customers (first_name, last_name, address_id)
VALUES
('Mathu', 'Mitha', 2);

SELECT * FROM customers;

-- CITY
create table city(
    city_id serial primary key,
    city_name varchar(20) not null 
);

INSERT INTO city (city_name)
VALUES
('Coimbatore'),
('Chennai');

SELECT * FROM city;

-- ADDRESS
CREATE TABLE address (
    address_id SERIAL PRIMARY KEY,
    address VARCHAR(50) NOT NULL,
    city_id INT NOT NULL,
    postal_code INT NOT NULL,
    phone VARCHAR(20),

    FOREIGN KEY (city_id)
    REFERENCES city(city_id)
);

INSERT INTO address (address, city_id, postal_code, phone)
VALUES
('Gandhipuram', 1, 641012, '9876543210'),
('Anna Nagar', 2, 600040, '9876501234');

SELECT * FROM address;

-- PAYMENT
CREATE TABLE payment(
    payment_id serial primary key,
    customer_id int not null,
    amount int not null,
    payment_mode varchar(20),
    payment_data timestamp default current_timestamp,

    FOREIGN KEY (customer_id)
    REFERENCES customers(customer_id)
);

-- DROP TABLE payment;

INSERT INTO payment (customer_id, amount, payment_mode, payment_data)
VALUES
(1, 1500.00, 'UPI', NOW()),
(2, 1200.00, 'Debit Card', NOW());

SELECT * FROM payment;

-- INNER JOIN
SELECT * 
FROM customers as c 
INNER JOIN payment as p 
ON c.customer_id = p.customer_id;

-- LEFT JOIN
SELECT *
FROM customers as c 
LEFT JOIN payment as p 
on c.customer_id = p.customer_id;

-- RIGHT JOIN
SELECT *
FROM customers as c 
RIGHT JOIN payment as p 
ON c.customer_id = p.customer_id;

-- OUTER JOIN
SELECT *
FROM customers as c 
FULL OUTER JOIN payment as p 
ON c.customer_id = p.customer_id;