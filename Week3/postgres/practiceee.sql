create table departments(
	dept_id serial primary key,
	dept_name varchar(50)
);
--inserting departments
INSERT INTO departments (dept_name) VALUES('Sales'),
('Marketing'),('HR'),('Engineering'),('Finance');

create table employees(
	emp_id serial primary key,
	emp_name varchar(50) not null,
	salary numeric(10,2),
	dept_id int not null,
	hire_date date not null default current_date,
	foreign key(dept_id) references departments(dept_id) 
);

--filler data chat gpt se liya
INSERT INTO employees (emp_name, salary, dept_id, hire_date) VALUES
('Alice Johnson', 60000, 1, '2018-03-15'),
('Bob Smith', 55000, 1, '2019-07-22'),
('Carol White', 72000, 4, '2020-01-10'),
('David Brown', 48000, 2, '2021-06-05'),
('Eva Green', 51000, 3, '2022-08-12'),
('Frank Black', 67000, 4, '2017-12-01'),
('Grace Lee', 53000, 5, '2016-05-20'),
('Henry Adams', 45000, 2, '2023-02-25'),
('Ivy Wilson', 80000, 4, '2015-09-30'),
('Jack Miller', 40000, 1, '2022-11-15'),
('Karen Clark', 49000, 3, '2018-10-03'),
('Leo Turner', 72000, 4, '2019-04-18'),
('Mona Scott', 67000, 5, '2017-07-11'),
('Nina King', 58000, 1, '2021-12-01'),
('Oscar Green', 61000, 2, '2020-05-23'),
('Paul Harris', 55000, 3, '2019-11-06'),
('Quincy Allen', 60000, 4, '2016-03-09'),
('Rita Moore', 47000, 5, '2023-01-14'),
('Steve Young', 53000, 2, '2017-08-30'),
('Tina Baker', 59000, 1, '2020-10-19');

--salary > 50000
select * from employees where salary>50000;
--hires within last 2 years
select emp_name from employees where hire_date>current_date-INTERVAL '2 years';
--employee with dept names
select e.emp_name,d.dept_name from employees as e inner join departments as d on e.dept_id=d.dept_id
--aggregation and grouping
select d.dept_name , avg(e.salary) from employees as e join departments as d on e.dept_id=d.dept_id group by dept_name
--dept names with more than 3 employees
--golden rule: jaha group by aaye ga waha having aaye ga
select d.dept_name,count(e.emp_name) from employees as e join departments as d on e.dept_id=d.dept_id group by d.dept_name having count(e.emp_id)>3;
--dept with max avg salary
select d.dept_name, avg(e.salary) as avg_sal from employees as e 
join departments as d on d.dept_id=e.dept_id
group by d.dept_name
order by avg_sal desc limit 1;





