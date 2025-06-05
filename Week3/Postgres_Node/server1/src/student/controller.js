const pool = require("../../db");
const { getStudentss, getStudentsById, checkEmailExists,addNewStudent,checkStudent,deleteUser,updateStudents } = require("../student/queries");


// getting all the student
const getStudents = (req, res)=>{
    pool.query(getStudentss,(error,response) => {
        if(error){
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(response.rows);
    });
};


//  get student by ID
const getStudentById=(req, res)=>{
    const id=parseInt(req.params.id);
    pool.query(getStudentsById, [id], (error, response) => {
        if(error){
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(response.rows);
    });
};

//when  we send data we send it through json
const addnewStudent=(req, res)=>{
    const {name,emai,age,dob}=req.body;
    // check if email already exists
    pool.query(checkEmailExists, [emai], (error, results)=>{
        if(error){
            return res.status(500).send("Something went wrong.");
        }
        if(results.rows.length){
           return  res.send("Email already exists");
        }
        else{
            //add student if email dosent exist 
            pool.query(addNewStudent,[name,emai,age,dob],(error,results)=>{
                if(error){
                    throw Error
                }
                res.status(200).send("Student created sucessfully!");
            })
        }
    });
};

//remove a student based on id
const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    //pehle check karo ki student exists or not
    pool.query(checkStudent, [id], (error, results) => {

        const noStudentFound=!results.rows.length
        // If student is not present
        if(noStudentFound){
            return res.send("STUDENT THAT YOURE TRYING TO REMOVE IS NOT PRESENT");
        }

        // If student is present, delete it
        pool.query(deleteUser, [id], (error, result) => {
            if(error){
                console.error(error);
                return res.status(500).send("Unexpected error, user can't be deleted");
            }
            return res.status(200).send("Student deleted successfully!");
        });
    });
};

const updateStudent=(req,res)=>{
    const id=parseInt(req.params.id);
    const{name}=req.body;
    pool.query(checkStudent,[id],(error,results)=>{
        const noStudentFound=!results.rows.length
        // If student is not present
        if(noStudentFound){
            return res.send("STUDENT does not exist in db");
        }

        pool.query(updateStudents,[name,id],(error,results)=>{
            if(error){
                throw error;
            }
            res.status(200).send("Student Updated Sucessfully")
        })
    })
}


module.exports={
    getStudents,
    getStudentById,
    addnewStudent,
    removeStudent,
    updateStudent
};
