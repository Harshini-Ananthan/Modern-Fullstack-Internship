create table customers (
    customer_id serial primary key,
    customer_name varchar(20) not null,
    phone varchar(20) not null,
    address varchar(50) not null
);

INSERT INTO customers (customer_name, phone, address)
VALUES
('Harshini', '9876543210', 'Coimbatore'),
('Madhu', '9876501234', 'Chennai'),
('Mathu', '9876123456', 'Bangalore');

Select * from customers;

create table restaurants(
    restaurant_id serial primary key,
    restaurant_name varchar(20) not null,
    location varchar(20) not null,
    opening_hours time not null,
    closing_hours time not null
);

INSERT INTO restaurants
(restaurant_name, location, opening_hours, closing_hours)
VALUES
('Annapoorna', 'Coimbatore', '08:00:00', '22:00:00'),
('Grill House', 'Kinathukadavu', '10:00:00', '23:00:00'),
('Vignesh', 'Malumichampatti', '09:00:00', '22:30:00');

select * from restaurants;

create table menu_items(
    item_id serial primary key,
    item_name varchar(20) not null,
    price int not null,
    restaurant_id int not null,
    
    foreign key (restaurant_id)
    references restaurants(restaurant_id)
);

INSERT INTO menu_items
(item_name, price, restaurant_id)
VALUES
('Dosa', 80, 1),
('Chicken Briyani', 599, 2),
('Chilli Parota', 299, 3);

select * from menu_items;

create table delivery_partners(
    partner_id serial primary key,
    partner_name varchar(20) not null,
    phone varchar(20) not null,
    vehicle varchar(20) not null
);

INSERT INTO delivery_partners
(partner_name, phone, vehicle)
VALUES
('Arun', '9000011111', 'Bike'),
('Kumar', '9000022222', 'Scooter'),
('Vijay', '9000033333', 'Bike');

select * from delivery_partners;

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    partner_id INT NOT NULL,
    total_price INT NOT NULL,
    status VARCHAR(20),

    FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id),

    FOREIGN KEY (restaurant_id)
        REFERENCES restaurants(restaurant_id),

    FOREIGN KEY (partner_id)
        REFERENCES delivery_partners(partner_id)
);

INSERT INTO orders
(customer_id, restaurant_id, partner_id, total_price, status)
VALUES
(1, 1, 1, 80, 'Delivered'),
(2, 2, 2, 599, 'Preparing'),
(3, 3, 3, 299, 'Out for Delivery');

select * from orders;

CREATE TABLE order_items(
    order_id INT NOT NULL,
    item_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    quantity INT NOT NULL,

    FOREIGN KEY (order_id)
        REFERENCES orders(order_id),

    FOREIGN KEY (item_id)
        REFERENCES menu_items(item_id),

    FOREIGN KEY (restaurant_id)
        REFERENCES restaurants(restaurant_id)
);

INSERT INTO order_items
(order_id, item_id, restaurant_id, quantity)
VALUES
(1, 1, 1, 2),
(2, 2, 2, 1),
(3, 3, 3, 1);

select * from order_items;

CREATE TABLE payments(
    payment_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    mode VARCHAR(20) NOT NULL,
    order_id INT NOT NULL,
    amount INT NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id),

    FOREIGN KEY (order_id)
        REFERENCES orders(order_id)
);

INSERT INTO payments
(customer_id, mode, order_id, amount)
VALUES
(1, 'UPI', 1, 80),
(2, 'Card', 2, 299),
(3, 'Cash', 3, 599);

select * from payments;