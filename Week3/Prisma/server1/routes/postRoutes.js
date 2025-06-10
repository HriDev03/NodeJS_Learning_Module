import express from "express";
import {fetchPosts,createPost,showPost,updatePost,deletePost,searchPost} from "../controller/postController.js"
const router = express.Router();

//create new post
router.post("/",createPost)
//searching : Full-text Search q=LIKE
router.get("/search",searchPost )
//id ko define karo in params
router.put("/:id",updatePost)

//saare users fetch karna
router.get("/",fetchPosts)
router.get("/:id",showPost)

//deleting user
router.delete("/:id",deletePost)




export { router }; 