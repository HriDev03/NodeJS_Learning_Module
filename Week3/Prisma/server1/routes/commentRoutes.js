import express from "express";

import {fetchComments,createComment,showComment,updateComment,deleteComment} from "../controller/commentController.js"

const router = express.Router();

//create new comments
router.post("/",createComment)

//id ko define karo in params
router.put("/:id",updateComment)

//saare comments fetch karna
router.get("/",fetchComments)
router.get("/:id",showComment)

//deleting comments
router.delete("/:id",deleteComment)

export {router}; 