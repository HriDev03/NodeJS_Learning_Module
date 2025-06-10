import prisma from "../DB/db.config.js"

//fetching all posts
export const fetchPosts= async(req,res)=>{
    const posts=await prisma.post.findMany({
        orderBy:{
            id:"desc"
        },

        /*
            where:{
                // or : any one of them can be true
                // and : both should be true
                AND/OR:[
                    {
                        title:{
                            startsWith:"condition"
                        }
                    },{
                        title:{
                            endsWith:"Blog"
                        }

                    }
                ]
                Not:{
                    title:{
                         endWit:"Blog"
                    }
                }
            }
        */
        /*
            // filtering on the bases of title
            where:{
                title:{
                    startsWith:"Next"
                    equals:"Next Js Blog"
                }
            }
            // filtering on the bases of comment count
            where:{
                comment_count:{
                    gt:0
                }
            },
        */
        include:{
            comment:{
                include:{
                    user:true
                }
            },
        }
    });
   
    return res.status(200).json({
        data:posts
    })
}

//createPost
export const createPost= async (req,res)=>{
    const {user_id,title,description}=req.body;
    const newPost = await prisma.post.create({
        data:{
            user_id:Number(user_id),
            title,
            description
        }
    });
    return res.status(201).json({
        data:newPost,
        message:"New Post created scessfully"
    })   
}

//show a post
export const showPost=async(req,res)=>{
    
    const postId=req.params.id;
    
    const post=await prisma.post.findFirst({
        where:{
            id: Number(postId)
        },
    });

    return res.status(200).json({
        data:post
    });
}

// update post
export const updatePost = async (req,res)=>{
    const postId=req.params.id;
    const {title,description}=req.body
    const updatePost=await prisma.post.update({
        where:{
            id:Number(postId),
        },
        data:{
            title,
            description
        }
    })
    res.status(200).json({
        message:"Post Updated Sucessfully",
        data:updatePost
    })
}


//delete post
export const deletePost=async (req,res)=>{
    
    const postId=req.params.id

    await prisma.post.delete({
        where:{
            id:Number(postId)
        }
    })

    return res.status(200).json({
        message:"Post delete krr diya hai "
    })
    
}

//Full-text Search
//to search the post
export const searchPost= async(req,res)=>{
    const query = req.query.q
    const posts=await prisma.post.findMany({
       // jo uska description hai usse querry se search krr do
        where:{
            description:{
                search:query
                //can use contains for samll texts
            }
        }
    })
    return res.status(200).json({
        data:posts
    })
}