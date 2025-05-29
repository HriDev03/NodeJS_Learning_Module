--to see all the databases present in our system
select datname from pg_database;

CREATE DATABASE day2;

--or
-- \l in terminal

-- Create emp table
CREATE TABLE emp (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  salary INT NOT NULL
);

-- Insert data into emp
INSERT INTO emp (id, name, salary) VALUES
(1, 'Hri', 1000),
(2, 'Ram', 100),
(3, 'Shyam', 500);

-- View available databases (just for exploration)
SELECT * FROM pg_database;

-- Create constraintss table with foreign key and composite primary key
CREATE TABLE constraintsss (
  idd INT,
  name VARCHAR(30),
  salary INT NOT NULL,
  FOREIGN KEY (idd) REFERENCES emp(id)
)

CREATE TABLE person(
	id INT,
	name VARCHAR(100),
	city VARCHAR(100)
);

--INSERTING DATA
INSERT INTO person
VALUES 
(104,'Alex','Pune');

truncate person

-- select id,name from person
--UPDATAING THE DATA 
update person
	set city='London'
	WHERE id=101

delete from person 
where id=104;

select * from person

CREATE DATABASE BankDB
