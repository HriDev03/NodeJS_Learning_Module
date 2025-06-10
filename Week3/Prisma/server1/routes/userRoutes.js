import express from "express";
import { createUser,getUsers,updateUser,getUserById,deleteUser} from "../controller/userController.js"

const router = express.Router();

//create user router
router.post("/",createUser)

//id ko define karo in params
router.put("/:id",updateUser)

//saare users fetch karna
router.get("/",getUsers)
router.get("/:id",getUserById)

//deleting user
router.delete("/:id",deleteUser)

export { router }; 