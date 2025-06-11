const prisma =require('../prisma/index')

//  new post vreate karo
//  one to many prisma relation

//database is in another continent
//we dont have to send the token as it is already sent from the cookies


exports.CreatePost = async(req,res,next)=>{
    try{
            const {slug,title,body,authorId}=req.body;
            // some validation logic
            const result= await prisma.post.create({
            data:{
                slug,
                title,
                body,
                //jab dusre moddel ko refrence karna hai
                //author se connect karo through authorid
                //connect two tables through authorId
                //connect with another id where 
                author:{connect :{id:authorId}} 
                //you are giving me authorId but i need author , connect it by authorID
            }
        })
        return res.status(201).json(result);
    }catch(error){
        console.error('Error creating post:', error);
        throw new Error(error)
    }
}

//update our post
exports.updatePost=async(req,res,next)=>{
   const {id}=req.params;
   //what are the things that should be updated
   const {title,body}=req.body
   try{
       const result = await prisma.post.update({
            //update where id's are same
            where:{id:id},
            data:{
                title,
                body
            }
        });
        res.json(result)
   }catch(error){
        // throw new Error(error);    
        res.json({error:`Post with ${id} does ot exitst`})
   }
}

//deleting our post
exports.deletePost=async(req,res,next)=>{
    const {id}=req.params
    try{
       
       const result= prisma.post.delete({
            where:{
                id:id
            }
        })
        //will return the deleted post
        res.json(result)
        
    } catch(error){
        res.json({error:`Post with id ${id} does not exitst`})
    }
}

//get all posts
exports.getPosts=async (req,res,next)=>{
    try{
       const result=await prisma.post.findMany({}) 
       //response mai saari result waala posts bhej diye
       res.json(result)
    }catch(error){
        res.json({error:`No post as found`})   
    }
}
