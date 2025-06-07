const express=require("express");
const { registerUser, loginUser, currentUser, restoreUser } = require("../controllers/userControllers");
const validateToken = require("../middlewares/validateTokenHandler");

const router=express.Router();

//user ko register karna
router.post("/register",registerUser)

//User loginn :open route
router.post("/login",loginUser)

// current user info : authn 
router.get("/current", validateToken, currentUser);

// user dele by id: only a logged in user can do it
router.delete("/:id",validateToken,deleteUser);

//yaha we need to only change the status of isDeleted field soo use patch 
// put tabh use hota jaha pura naya , aur saare fields update hote
router.patch("/:id/restore",validateToken,restoreUser);

router.get("/", getUsers); // GET /api/users?page=1&limit=10

module.exports=router;