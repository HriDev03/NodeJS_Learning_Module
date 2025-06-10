// abb samjhe ge nested relations kaise hote hai 
import prisma from "../DB/db.config.js"

//fetching all posts
export const fetchComments= async(req,res)=>{
    const comments=await prisma.comment.findMany({
        include:{
            user:true,
            post:{
                include:{
                    user:true
                }
            }
        }
    });
    return res.status(200).json({
        data:comments
    })
}

//createPost
export const createComment= async (req,res)=>{

    const {user_id,post_id,comment}=req.body;

    //post ka comment count ko increase karo
    await prisma.post.update({
        where:{
            id:Number(post_id),
        },
        data:{
            comment_count:{
                //increment by 1
                increment:1
            }
        }
    })

    //new comment banao
    const newComment = await prisma.comment.create({
        data:{
            user_id:Number(user_id),
            post_id:Number(post_id),
            comment,
        }
    });
    return res.status(201).json({
        data:newComment,
        message:"New Comment created scessfully"
    })   
}

//show a comment
export const showComment=async(req,res)=>{
    const commentId=req.params.id;
    const comment=await prisma.comment.findFirst({
        where:{
            id: Number(commentId)
        },
    });
    return res.status(200).json({
        data:comment
    });
}


// update post
export const updateComment = async (req,res)=>{
    const commentId=req.params.id;
    const {comment}=req.body
    const updatedComment=await prisma.comment.update({
        where:{
            id:Number(commentId),
        },
        data:{
            comment
        }
    })
    res.status(200).json({
        message:"comment Updated Sucessfully",
        data:updatedComment
    })
}

//delete post
export const deleteComment=async (req,res)=>{
    const commentId=req.params.id
    await prisma.post.update({
        where:{
            id:Number(post_id),
            data:{
                comment_count:{
                    //increment by 1
                    decrement:1
                }
            }
        }
    })

    await prisma.comment.delete({
        where:{
            id:Number(commentId),
        }
    })

    return res.status(200).json({
        message:"Post delete krr diya hai "
    })
    
}

