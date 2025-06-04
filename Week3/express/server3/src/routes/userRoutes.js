import express from "express"
import {createUser,getAllUsers,getUserById,updateUser,deleteUser} from "../controllers/userController.js"

//creating express router
const router=express.Router();

//routes define karege
//CREATE new user       
router.post("/user",createUser);

//GET all users
router.get("/user",getAllUsers);

//GET user by id
router.get('/user/:id', getUserById);

//UPDATE user by id
router.put("/user/:id",updateUser);

//DELETE user
router.delete("/user:id",deleteUser);

//EXPORTING ROUTER OBJECT
export default router;