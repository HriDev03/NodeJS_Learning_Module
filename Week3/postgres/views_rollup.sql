 --customers
 create table customers(
	cust_id serial primary key,
	cust_name varchar(50) not null
 )

INSERT INTO customers (cust_name)
VALUES ('Raju'), ('Sham'), ('Paul'), ('Alex');
 
 --orders
 create table orders(
	ord_id serial primary key,
	ord_date date not null default current_date,
	cust_id int not null,
	foreign key(cust_id) references customers(cust_id)
 )

 INSERT INTO orders (ord_date, cust_id)
VALUES
    ('2024-01-01', 1),  -- Raju first order
    ('2024-02-01', 2),  -- Sham first order
    ('2024-03-01', 3),  -- Paul first order
    ('2024-04-04', 2);  -- Sham second order

 
 --products
 create table products(
	p_id serial primary key,
	p_name varchar(50) not null,
	price numeric(10,2) not null
 )

 INSERT INTO products (p_name, price)
VALUES ('Laptop', 55000.00), ('Mouse', 500), ('Keyboard', 800.00),('Cable', 250.00);
 
 --order_items
 create table order_items(
	items_id serial primary key,
	order_id int not null,
	p_id int not null,
	quantity int not null,
	foreign key(order_id) references orders(ord_id),
	foreign key(p_id) references products(p_id)
 )

 INSERT INTO order_items (order_id, p_id, quantity)
VALUES
    (1, 1, 1),  -- Raju ne ordered 1 Laptop
    (1, 4, 2),  -- Raju ordered 2 Cables
    (2, 1, 1),  -- Sham ordered 1 Laptop
    (3, 2, 1),  -- Paul ordered 1 Mouse
    (3, 4, 5),  -- Paul ordered 5 Cables
    (4, 3, 1);  -- Sham ordered 1 Keyboard

select * from customers;
select * from orders;
select * from products;
select * from order_items;


-- to see combined data 
select c.cust_name,
o.ord_date, 
p.p_name ,
p.price,
oi.quantity,
(oi.quantity*p.price )as Total_Bill

from order_items as oi
join 
products as p on oi.p_id=p.p_id
join 
orders as o on o.ord_id=oi.order_id
join 
customers as c on c.cust_id =o.cust_id


--how much each customer has spent
SELECT c.cust_name,SUM(oi.quantity*p.price) as total_bill
FROM order_items as oi
JOIN 
products as p ON oi.p_id=p.p_id
JOIN 
orders as o ON o.ord_id=oi.order_id
JOIN 
customers as c ON c.cust_id=o.cust_id
GROUP BY c.cust_name;

--ktni badi querry hai agar firr se data chahiye toh firr se likhni padegi
-- kyaa humm isko assan krr sakte hai
--it is a temporary table that we can access kabhi bhi

--HOW TO MAKE A VIEW?
--jaha se querry start ho rahi hai uske pehle create view

create view billing_info as

select c.cust_name,
o.ord_date, 
p.p_name ,
p.price,
oi.quantity,
(oi.quantity*p.price )as Total_Bill

from order_items as oi
join 
products as p on oi.p_id=p.p_id
join 
orders as o on o.ord_id=oi.order_id
join 
customers as c on c.cust_id =o.cust_id

-- abb iss querry ka view bann gaya hai
select * from billing_info
-- it is not a table , we just have stored our querry in a short form


--HAVING
select p_name, sum(price) from billing_info
group by p_name

-- show only products where total sale>1500
select p_name, sum(price) from billing_info
group by p_name having sum(price)>500

-- jab bhi normal table hai and we have to use conditions use where
-- in case of group by when we have to give condition use HAVING CLAUSE

--GROUP BY ROLLUP : agar last mai total chahiye ho toh we can use group by rollup
select coalesce(p_name,'Total'), sum(price) AS ITEM_BILL from billing_info
group by rollup(p_name) order by ITEM_BILL asc;
--jaha null aaye ga uski jagah total aa jaaye ga

SELECT 
  c.cust_id, 
  c.cust_name, 
  COUNT(o.order_id) AS total_orders,
  SUM(o.price) AS total_price
FROM customers AS c
FULL OUTER JOIN orders AS o 
  ON c.cust_id = o.cust_id
GROUP BY c.cust_id, c.cust_name
HAVING COUNT(o.order_id) > 2
ORDER BY c.cust_id;
