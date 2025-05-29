-- everything in unorganised in our house and we need to find keys , then it will take a lot of time
-- but if we go to a medical shop to buy a medicine it is organised and itll give it to us quickly, realworld example of indexing
-- linear search in array of million elements O(n) 
-- if it was sorted tll take o(log n) indexing is the way to apply binary search in our table(kinda)
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    networth int 
);

DO $$
BEGIN
    FOR i IN 1..1000000 LOOP--10lakh baar chalega loop
        INSERT INTO students (id, name, networth)
        VALUES (
            i, 
            concat('Student',i), 
            CASE 
                WHEN i = 10000 THEN 5000  -- Ensure last student has 5000 networth
                ELSE floor(random() * 5000)::int
            END
        );
    END LOOP;
END
$$;

-- itll check all the records to search it
drop table students

select * from students where networth=5000;--368ms

--HOW TO MAKE INDEXING
--syntax : create index index_name on tableName(colName) jaha index bana na hoo
create index idx_networth on students(networth)
--kaise check karege if indexing is used
EXPLAIN SELECT * FROM students WHERE networth = 5000;
--select after indexing
SELECT * FROM students WHERE networth = 5000;--86ms

--we can optimise it my making index of networth column
-- in this the networth column will be stored in a seperate location in sorted order
-- networth,pointer to row(lookup table)

-- if we apply a where clause, itll first check if indexin is there on the column if yes then itll check in the index
-- B-Trees is used for indexing, used in read intensive database
-- agat write intensive hai , yaa fir update ho raha hai then dont use it


                