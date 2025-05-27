create table employees(
	emp_id SERIAL PRIMARY KEY,
	fname VARCHAR(50) NOT NULL,
	lname VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	dept VARCHAR(50),
	salary DECIMAL(10,2) DEFAULT 30000.00,
	hire_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO employees (emp_id, fname, lname, email, dept, salary, hire_date) 
VALUES 
(1, 'Raj', 'Sharma', 'raj.sharma@example.com', 'IT', 50000.00, '2020-01-15'), 
(2, 'Priya', 'Singh', 'priya.singh@example.com', 'HR', 45000.00, '2019-03-22'), 
(3, 'Arjun', 'Verma', 'arjun.verma@example.com', 'IT', 55000.00, '2021-06-01'), 
(4, 'Suman', 'Patel', 'suman.patel@example.com', 'Finance', 60000.00, '2018-07-30'), 
(5, 'Kavita', 'Rao', 'kavita.rao@example.com', 'HR', 47000.00, '2020-11-10'), 
(6, 'Amit', 'Gupta', 'amit.gupta@example.com', 'Marketing', 52000.00, '2020-09-25'), 
(7, 'Neha', 'Desai', 'neha.desai@example.com', 'IT', 48000.00, '2019-05-18'), 
(8, 'Rahul', 'Kumar', 'rahul.kumar@example.com', 'IT', 53000.00, '2021-02-14'), 
(9, 'Anjali', 'Mehta', 'anjali.mehta@example.com', 'Finance', 61000.00, '2018-12-03'), 
(10, 'Vijay', 'Nair', 'vijay.nair@example.com', 'Marketing', 50000.00, '2020-04-19');

INSERT INTO employees (emp_id,fname, lname, email,dept) 
VALUES (11,'Priya', 'Singh', 'priyaa.singhh@example.com', 'HR');

--CLAUSES
-- where clause
SELECT * FROM employees where emp_id=5;
-- peopele of hr dept
select * from employees where dept='HR'
--relational operators
select * from employees where salary>=50000
--logical operators
select * from employees where dept='HR' or dept='IT'
--and operator
select * from employees where salary>50000 and dept='IT'
--in not in
--in jo present hai in array
select * from employees where dept in ('IT','HR','Finance')
--not in jo array mai present nahi hai
select * from employees where dept not in ('IT','HR','Finance')
--between to fetch data in a range 50000 included
 select * from employees where salary between 50000 and 60000
--distinct
SELECT distinct DEPT from employees
--order by used to sort data
select * from employees order by emp_id desc;
-- limit to see limited number of data
select * from employees limit 3;
--LIKE clause to see for patters 
--unn employees ka naam do jinka naam a yaa fir r se start hoo
--A se start 
select * from employees where fname like 'A%';
--r second char
select * from employees where fname like '_r%';
-- dept name has 2 chars
select * from employees where dept like '__';
-- second char as a
select * from employees where fname like '_a%';

-- Aggregate functions
--count try to se primary key
select count(emp_id) from employees;
select count(fname) from employees;
--sum of salaries
select sum(salary) from employees;
--average
select avg(salary) from employees;
--min 
select min(salary) from employees;
--max
select max(salary) from employees;

-- Group By : group by  
-- it is used with agregate function , hrr ek department mai kitne employees hai?
select dept, count(emp_id) from employees group by dept
-- to check what salary we are giving in each department
select dept , sum(salary) from employees group by dept 

--string functions
--concat : concationation, dono word ko combine krr ke print karo
select concat('Hello','World');
select emp_id, concat(fname,lname) AS fullName , dept, salary from employees;

--with seperators
select emp_id, concat_ws(' ',fname,lname) AS fullName , dept, salary from employees;
--concat_ws
select CONCAT_WS('-','one','two','three');

--substring: string ka chota part nikalna
select substr('Hello Buddy!!',7,13)
SELECT substr('Hello Buddy!!', -5, 3);

--replace: to replace the value of a string
-- replace(str,from_str,to_str)
select replace('Hello Buddy','Hello','Hey');
select replace(dept,'IT','Tech') from employees

--reverse: to reverse the given string
select reverse('Hello Jee')

-- length: to print length of the given string
--print names where length is less than 5
select * from employees where length(fname)>5;

--upper and lower
select upper(fname) from employees;
select lower(fname) from employees;

--left , right and trim

--left : left se kitne characters chahiye
select left('hello world',4)

--right : right se kitne characters chahiye
select right('hello world',5)

--trim : used to remove white spacess
SELECT LENGTH(' HELLO  ')
SELECT LENGTH(TRIM(' HELLO  '))
--position : to find the position of a character or word in a long string
select position('om' in 'thomas') -- 3 cuz o is present in 3rd position

select concat_ws(':',emp_id,concat_ws(' ',fname,lname),upper(dept) )from employees where emp_id=2

--PRACTICE QUESTIONS
--by using desc
SELECT * from employees order by salary DESC limit 1
--by using sub-querries : query ke andar ek aur querry
SELECT * from employees where salary=(select MAX(salary) FROM employees);
-- SUM OF IT DEPARTMENT
select dept,sum(salary) from employees  where dept='IT'
--TO PRINT AVERAGE SALARY
select dept,AVG(salary) from employees group by dept

-- group by on multiple columns
CREATE TABLE employees2 (
    emp_id SERIAL PRIMARY KEY,
    fname VARCHAR(50),
    dept VARCHAR(50),
    job_title VARCHAR(50),
    salary INT
);

INSERT INTO employees2 (fname, dept, job_title, salary) VALUES
('Alice', 'HR', 'Manager', 70000),
('Bob', 'HR', 'Executive', 40000),
('Charlie', 'IT', 'Manager', 90000),
('David', 'IT', 'Developer', 60000),
('Eve', 'IT', 'Developer', 60000),
('Frank', 'Finance', 'Analyst', 50000),
('Grace', 'Finance', 'Manager', 80000),
('Hannah', 'Finance', 'Analyst', 55000);

SELECT dept, job_title, AVG(salary) AS avg_salary
FROM employees2
GROUP BY dept, job_title;

create table person(
	id serial primary key,
	fname varchar(50) not null,
	loc varchar(100) not null
)

alter table person add column fname varchar(50)

INSERT INTO person (fname, loc) VALUES
    ( 'Sham', 'Mumbai'),
    ( 'Paul', 'Chennai'),
    ( 'Raju', 'Bangalore');

select * from person


--Alter table
-- used to add /remove/remane column
--alter table table_name add column , drop column, rename column colname to colname2 , tablename rename to tablename2
--adding a column

ALTER TABLE person add column age int default 0;

--drop command just to remove a column
ALTER table person drop column age; 


--how to rename a column
alter table person rename column id to rollno;
--how to rename a table name
alter table person rename to person_info;
alter table person_info rename to person;

-- to change datatype of a column
alter table person
alter column fname
set data type varchar(300)

--check constraints
alter table person
add column mob varchar(15) check (length(mob)>=10);
insert into person(mob)
values (12345679)

--named consraints
alter table person
add constraint mon_less_tan_10
	check(length(mob)>=10);

insert into person(mob)
values(123)--will throw us an error


--case expression
-- suppose i need to write low/high salary infront of the person name based on his salary

select 
case 
	when salary>=50000 then 'High'
	when salary >=40000 and salary<50000 then 'Mid'
	else 'Low'
end as sal_cat,count(emp_id) --name of my new col
from  employees group by sal_cat;


select concat_ws(' ',fname,lname) as fullName, salary,
case
	when salary>0 then  round(salary*10/100)
end as bonus_received
from employees;

--relationship between tables
--types
-- 1) one to one
-- 2) one to many
-- 3) many to many



select * from person