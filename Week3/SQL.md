# DATABASE

- Collection of data in a format that can be easily accessed.
- Can easily delete data.
- Can be easily updated.
- Can be easily searched throughout the data.
- Easily adding new data.

**DATA IS STORED IN DIGITAL MANNER**

---

## What is DATABASE?

An organised collection of data, a method to access data.

---

## Why can't we use Excel?

- It is good for small data, but when we have to store large amounts of data it is not efficient.
- It will take a lot of time to update some data.
- File may not even open.

---

## DATABASE vs DBMS

**THE BRIDGE BETWEEN OUR BACKEND AND OUR DB IS DBMS**

- **DBMS (Database Management System)** is a software application that is used to manage a database (add new data, delete data, update data, or search data).




user----------->DBMS------------>DB

- Users cannot access the database directly.
- The DBMS acts as a middle layer (software application) between users and the database.
- The DBMS processes user requests and performs operations on the database accordingly.

> We can't access a database directly; we access it through a **DBMS**.  
> DBMS is like a middle layer, a software application.  
> It works in the backend to make changes or fetch information from the database.

---

## RDBMS

- A type of database system that stores data in structured tables (in rows and columns) and uses SQL for managing data.

---

## SQL vs POSTGRES?

- SQL is used to talk to our databases.
- POSTGRES is a tool (database management system).

---

## DATABASE vs Schema vs Tables

| Term      | Definition                                                   | Example                         |
|-----------|--------------------------------------------------------------|--------------------------------|
| Database  | A container that holds all the data for an application.      | InstagramDB                    |
| Schemas   | A logical grouping of related tables.                        | user_schema, reel_schema, post_schema |
| Tables    | A structured collection of rows and columns storing the data.| posts, post_likes, post_comments|

---

## SQL?

- Structured Query Language.
- A programming language understood by computers.
- Used to interact with relational databases.

> SQL KI HELP SE DATABASES SE BAAT KAR SAKTE HAI.

---

## TABLE

- It is a collection of related data present in a table format.

---

## CRUD Operations using SQL

1. **Create:** Creating a database.
2. **Read:** Reading data from the database.
3. **Update:** Updating data present in the database.
4. **Delete:** Deleting entries in the database.

> Can also be called SEQUEL (Structured English Query Language), made by IBM.

---

## Interconnected Tables Example

### College Database:
- table1: student
- table2: fees
- table3: courses

### Company Database:
- table1: emp
- table2: salaries
- table3: department

---

## TABLE Structure

- Combination of rows and columns.
- Vertical: columns.
- Horizontal: rows.

- Columns define our **Schema** (design).
- Rows are individual data records.

---

## TYPES OF SQL COMMANDS

1. **DDL** (Data Definition Language): `CREATE`, `ALTER`, `TRUNCATE`, `RENAME`, `DROP`
2. **DQL** (Data Query Language): `SELECT`
3. **DML** (Data Manipulation Language): `INSERT`, `UPDATE`, `DELETE`
4. **DCL** (Data Control Language): `GRANT`, `REVOKE`
5. **TCL** (Transaction Control Language): `START`, `COMMIT`, `ROLLBACK`, `Evoke`

---

## KEYS: Special kind of columns

1. **PRIMARY KEY:**
   - Could be a column or set of columns.
   - Uniquely identifies all rows of a table.
   - It is unique and NOT NULL.
   - Only one primary key allowed per table.

2. **FOREIGN KEY:**
   - Column or set of columns that refers to the primary key of another table.
   - There can be many foreign keys.
   - Can be NULL and have duplicates.

---

## SQL Commands

- Create database:

  ```sql
  CREATE DATABASE db_name;

---------------------------------------------------------------------------------------------------------------------------
# SQL Commands

---

#### 1) Create a Database

CREATE DATABASE db_name;



#### 2)  used to delete our database
  DROP DATABASE db_name;

#### 3)  to use a database
  USE db_name;

#### 4) to read table
  select *  from tableName

#### 5) to read particular data
5) select col1,col2 from tableName

#### 6) to update the data in the table

UPDATE tableName
 set col=newVal
 where condition


#### 7) to delete the data in the table
delete from person 
WHERE condition

-------------------------------------------------------------------
# How to Improve Our Table

By using **data types** and **constraints**.

---

## Data Types in SQL

- **CHAR** — Strings (0-255) of fixed length.  
- **VARCHAR** — Strings (0-255) of variable length (e.g., `VARCHAR(50)`).  
- **BLOB** — Used to store large strings.  
- **INT** — Stores integer values.  
- **TINYINT** — Stores small integer values.  
- **BIGINT** — Stores large integer values.  
- **BIT** — Used to store bit values.  
- **FLOAT** — Used to store decimal values.  
- **DOUBLE** — Used to store large decimal values.  

**DECIMAL(5,2)**  
- `5` = Total number of digits  
- `2` = Digits after decimal point  

---

## Signed and Unsigned Data Types

- **Signed:** Stores both positive (+) and negative (-) values.  
- **Unsigned:** Stores only positive values.  

---

## Constraints

Rules applied to columns when defining a table. You specify:  

- Datatype for the column  
- Constraints to specify rules for data  

### Common Constraints

- `NOT NULL` — Columns cannot have null values  
- `UNIQUE` — All values must be different  
- `PRIMARY KEY` — Cannot be null or duplicate; uniquely identifies every row. Only one primary key per table.  

---

## Example Table with Constraints


CREATE TABLE constraintss (
  id INT,
  name VARCHAR(30),
  **Using multiple constraints for a single column**
  salary INT **NOT NULL DEFAULT** 25000,
  PRIMARY KEY (id, name)
);

--
## Auto Increment

- For IDs that increase automatically.  
- Unique and sequential.  
- Use the `SERIAL` datatype.  

---

## Composite Primary Key

- Combination of two or more columns form a primary key.  
- Even if individual columns may not be unique or `NOT NULL`, their combination will always be unique.  

---

## Notes on Constraints

- `salary` cannot be `NULL` due to the `NOT NULL` constraint.  

---

## Indexes

- Help improve searching operations.  
- Created automatically in the backend.  

---

## Data Refining

We use the following clauses for refining data queries:

- `WHERE`  
- `DISTINCT`  
- `ORDER BY`  
- `LIMIT`  
- `LIKE`  

---

### 1) WHERE Clause
  we can fetch specific data sing where 
######  SELECT * FROM employees where emp_id=5;
- #### using relational operator ( > , < , = , != , <= , >= )
###### select * from employees where salary>=50000;
- #### using Logical operators ( AND , OR , NOT )
###### or operator : select * from employees where dept='HR' or dept='IT'
###### and operator : select * from employees where salary>50000 and dept='IT'

- #### IN , NOT IN : will give all the matching condition present in the iterable

- ##### IN : jo present hai in array
###### select * from employees where dept in ('IT','HR','Finance')
- ##### NOT IN : jo array mai present nahi hai
###### select * from employees where dept not in ('IT','HR','Finance')
 
- ##### Between : to store data inside a range
###### select * from employees where salary between 50000 and 60000

---
### 2) DISTINCT Clause : HELP US TO FETCH UNIQUE VALUES
###### SELECT distinct DEPT from emloyees
---
### 3) Order By : used to sort our data 
- ###### ASC(default):  select * from employees order by fname;

- ###### DESC(default):  select * from employees order by fname desc;

- ###### OFFSET (to skip) : SELECT * FROM employees ORDER BY fname DESC OFFSET 1;


---
### 4) Like Clause :used to see pattern, can be done usig wildcards , it is case sensitive
- ##### A se start :select * from employees where fname like 'A%';
- ##### r second char : select * from employees where fname like '_r%';
- ##### give me dept name where there are only two letters : select * from employees where dept like '__';

---

# Aggregate functions
**Aise functions jinki help se we can perform some calculations on our table and its results**
- `COUNT`  
- `SUM`  
- `AVG`  
- `MIN`  
- `MAX`  

**USE CASES :** 
-  How to find total no of employees
-  Employee with max salary
-  Average salary of employees

- ###### count try to se primary key
select count(emp_id) from employees;
select count(fname) from employees;
- ###### sum of salaries
select sum(salary) from employees;
- ###### average
select avg(salary) from employees;
- ###### min 
select min(salary) from employees;
- ###### max
select max(salary) from employees;

--

# Group By
**it is used with agregate function , hrr ek department mai kitne employees hai?**
- ###### select dept,count(emp_id) from employees group by dept;

--

# string functions
**Agar columns ki value ko change karna padega, some decoration etc. then we use this**


##### concat : concationation, dono word ko combine krr ke print karo
- **select concat('Hello','World');**

- **select emp_id, concat(fname,lname) AS fullName , dept, salary from employees;**

##### with seperators
- **select emp_id, concat_ws(' ',fname,lname) AS fullName , dept, salary from employees;**

##### concat_ws

-  **select CONCAT_WS('-','one','two','three');**

##### SUBSTR / substring: string ka chota part nikalna
-  **select substr('Hello Buddy!!',7,13)**

-  **SELECT substr('Hello Buddy!!', -5, 3);**

##### Replace: to replace the value of a string
- **replace(str,from_str,to_str)**
- **select replace('Hello Buddy','Hello','Hey');**
- **select replace(dept,'IT','Tech') from employees**

##### reverse: to reverse the given string
- **select reverse('Hello Jee')**

##### length: to print length of the given string
 ***print names where length is less than 5***
- **select * from employees where length(fname)>5;**

##### upper and lower
**select upper(fname) from employees;**
**select lower(fname) from employees;**

##### left , right and trim

###### left : left se kitne characters chahiye**
- **select left('hello world',4)**

###### right : right se kitne characters chahiye
- **select right('hello world',5)**

###### trim : used to remove white spacess
-**SELECT LENGTH(' HELLO  ')**
- **SELECT LENGTH(TRIM(' HELLO  '))**

###### position : to find the position of a character or word in a long string
**select position('om' in 'thomas') -- 3 cuz o is present in 3rd position**

**select concat_ws(':',emp_id,concat_ws(' ',fname,lname),upper(dept) )from employees where emp_id=2**

### PRACTICE QUESTIONS
##### by using desc
**SELECT * from employees order by salary DESC limit 1**
- ##### by using sub-querries : query ke andar ek aur querry
**SELECT * from employees where salary=(select MAX(salary) FROM employees);**
- ###### SUM OF IT DEPARTMENT
**select dept,sum(salary) from employees  where dept='IT'**
- ###### TO PRINT AVERAGE SALARY
**select dept,AVG(salary) from employees group by dept**

- ###### group by on multiple columns
***CREATE TABLE employees2 (
    emp_id SERIAL PRIMARY KEY,
    fname VARCHAR(50),
    dept VARCHAR(50),
    job_title VARCHAR(50),
    salary INT
);***

***INSERT INTO employees2 (fname, dept, job_title, salary) VALUES
('Alice', 'HR', 'Manager', 70000),
('Bob', 'HR', 'Executive', 40000),
('Charlie', 'IT', 'Manager', 90000),
('David', 'IT', 'Developer', 60000),
('Eve', 'IT', 'Developer', 60000),
('Frank', 'Finance', 'Analyst', 50000),
('Grace', 'Finance', 'Manager', 80000),
('Hannah', 'Finance', 'Analyst', 55000);***

**SELECT dept, job_title, AVG(salary) AS avg_salary
FROM employees2
GROUP BY dept, job_title;**
