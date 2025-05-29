create table customers(
	cust_id serial PRIMARY KEY,
	cust_name varchar(50) not null
);

create table orders(
	order_id serial primary key,
	order_date date not null default current_date,
	price numeric(10,2) not null,
	-- it is our foreign key that will maintain relationship with customers table
	cust_id integer not null,
	--foreign key bana diya customer ki cust_id ko refrence karega
	foreign key(cust_id) references customers(cust_id)
);

insert into customers(cust_name)values
('Raju'),('Sham'),('Paul'),('Alex');

insert into orders(order_date,cust_id,price)
values
('2024-01-01',1,250.00),
('2024-01-15',1,300.00),
('2024-02-01',2,150.00),
('2024-03-01',3,450.00),
('2024-04-04',2,550.00);

select * from  customers
select * from  orders

-- kyaa humm alag alag hi dekhe ge?
--can we see data in a combined manner

--Join: used to combine rows from two tables based on related columns between them
-- used to combine two tables
--types 
-- cross join , inner join , left join, right join

--cross join: used to see all possible combinations, every row from one table is combined with every row from another table
--not that used
select * from customers cross join orders;

--inner : return only rows where there is match between the specified columns in both left and right tables
-- jo common data/connected data hoga sirf vohi use karnaa hai
-- voh rows return karo jaha customers ki cust_id aur orders ki cust_id same ho
-- jaha match hoga sirf vohi data aaye ga
select * from customers as c inner join orders as o on c.cust_id=o.cust_id;
--alex ne order nahi kiya soo will not be shown here

--inner join and group by
-- customers name print karo , batao kitne orders kiye hai and kitne ke kiye hai
select c.cust_name, count(o.order_id),sum(o.price) from customers as c 
	inner join 
	orders as o on c.cust_id=o.cust_id 
group by cust_name; 

--left join : returns all rows from left table and matching rows from right table
--left table mai saara data right table ka kaam ka data
select * from customers as c 
	left join 
	orders as o 
on c.cust_id=o.cust_id ; 
-- alex will be shown as left join mai customers ka saata data store hoga

select * from customers as c 
	right join
	orders as o 
on c.cust_id=o.cust_id ; 

--full outer join is used to get all the customer details and order details it is like union of left join and right join
select c.cust_id, c.cust_name, o.order_id, o.order_date,o.price
from 
customers as c
full outer join orders as o on c.cust_id=o.cust_id  
order by c.cust_id, o.order_id;

create database institute;