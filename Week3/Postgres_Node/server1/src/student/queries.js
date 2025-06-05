// all our sql queries here


const getStudentss = "SELECT * FROM students";

const getStudentsById = "SELECT * FROM students WHERE id = $1";

const checkEmailExists = "SELECT * FROM students s WHERE s.emai = $1";

const checkStudent="SELECT * FROM students as s where s.id=$1 "

const addNewStudent="INSERT INTO students (name,emai,age,dob) values ($1,$2,$3,$4)";

const updateStudents="Update students set name=$1 where id=$2"

const deleteUser="Delete from students where id=$1"

module.exports={
    getStudentss,
    getStudentsById,
    addNewStudent,
    checkEmailExists,
    checkStudent,
    deleteUser,
    updateStudents
};
