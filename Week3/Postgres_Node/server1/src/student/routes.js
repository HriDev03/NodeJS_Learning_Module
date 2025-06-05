const { Router } = require("express");
const { getStudents, getStudentById,addnewStudent,removeStudent,updateStudent} = require("./controller");
const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post("/",addnewStudent)
router.put("/:id",updateStudent)
router.delete("/:id",removeStudent)


module.exports = router;
