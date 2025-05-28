--many to many
--many students can  take a course, and one stdent can take many courses

--student table
create table students(
	s_id serial primary key,
	s_name varchar(50) not null 
);

--courses table
create table courses(
	c_id serial primary key,
	c_name varchar(50) not null,
	fee numeric(10,2) not null
);

--enrollment table
CREATE TABLE enrollment (
    enrollment_id serial PRIMARY KEY,
    s_id int NOT NULL,
    c_id int NOT NULL,
    enrollment_date date NOT NULL DEFAULT CURRENT_DATE,
    FOREIGN KEY (s_id) REFERENCES students(s_id),
    FOREIGN KEY (c_id) REFERENCES courses(c_id)
);

INSERT INTO courses (c_name, fee)
VALUES
('Mathematics', 500.00),
('Physics', 600.00),
('Chemistry', 700.00);

INSERT INTO Students (S_name) VALUES
('Raju'),
('Sham'),
('Alex');


INSERT INTO enrollment (s_id, c_id, enrollment_date)
VALUES
(1, 1, '2024-01-01'), -- Raju enrolled in Mathematics
(1, 2, '2024-01-15'), -- Raju enrolled in Physics
(2, 1, '2024-02-01'), -- Sham enrolled in Mathematics
(2, 3, '2024-02-15'), -- Sham enrolled in Chemistry
(3, 3, '2024-03-25'); -- Alex enrolled in Chemistry


-- i want course name instead of course_id and in place of s_id i want student name and also want fees
--kon se student ne kon si fees li hai and uski fees kitni hai??
select s.s_name,c.c_name,e.enrollment_date,c.fee from enrollment as e 
--by default its inner join
join 
-- voh data show karo jaha student mai student id and enrollment ki student id match karti ho
students as s on e.s_id=s.s_id
join
-- voh data show karo jaha courses mai course id and enrollment ki course id match karti ho
courses as c on c.c_id=e.c_id

--kiss student ne kitne courses liye aur kitne paise spent kiye
select s.s_name as StudentName,count(c.c_name) AS CourseCount,sum(c.fee) as TotalFees from enrollment as e
join students as s on s.s_id=e.s_id
join courses as c on c.c_id=e.c_id
group by s.s_name


SELECT * FROM students;
SELECT * FROM courses;
SELECT * FROM enrollment;

