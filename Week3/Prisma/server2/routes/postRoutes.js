const express=require("express")
const router=express.Router();
const isLoggedIn=require("../middlewares/isLoggedIn");
const { CreatePost, updatePost, deletePost, getPosts } = require("../controller/postController");

router.post("/create",isLoggedIn,CreatePost)
router.put("/update/:id",isLoggedIn,updatePost)
router.delete("/delete/:id",isLoggedIn,deletePost)
router.get("/getAllPosts",getPosts)
module.exports=router;