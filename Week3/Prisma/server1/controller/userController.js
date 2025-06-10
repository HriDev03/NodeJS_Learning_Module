import prisma from "../DB/db.config.js";


// users se related sab hai : Create , Update , Delete,

//create the user
export const createUser=async(req,res)=>{
    const {name,email,password}=req.body;
    // user ko find karna ho db  mai kaise karege
    //find first, findfirstorthrow , findunique

    //jab bhi db mai kuch bhi krr rahe hai toh use async await
    const findUser=await prisma.user.findUnique({
        //kiske base pe find karna hai 
        where:{
            email:email
        }
    })
    if(findUser){
        return res.json({status:400,message:"email already taken , enter a unique email "})
    }
    // single record : create, multiple records:Create many
    const newUser=await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })
    // jo data insert hota hai usse return bhi karta hai 
    return res.json({
        status:201,
        data:newUser,
        message:"user create ho gaya hai "
    })
}

//update the user
export const updateUser=async (req,res) =>{
    const userId=req.params.id
    const {name,email,password}=req.body;
    // to update user prisma.modelName
    await prisma.user.update({
        //kis base pe update karna hai
        where:{
            // jo id aaye gi voh as a string aaye gi toh change it to number
            id:Number(userId)
        },
        //kya kya data dalna hai 
        data:{
            name,
            email,
            password
        }
    })
    return res.status(200).json({
        message:"Update ho gaya jii"
    })
}

// Get all the  users
export const getUsers = async(req,res)=>{
    const users = await prisma.user.findMany({
        //post ka data bhi dega
        /*
            include:{
                // will give all info
                // post:true,
                post:{
                    select:{
                        title:true,
                        comment_count:true
                    }
                }
            }
        */
        // to get users with post count and comment count
        select:{
            id: true,
            name: true,
            email: true,
            //count show karna hai ji
            _count:{
                //post ka count aur comment ka count dega
                select:{
                    post:true,
                    comment:true
                }
            }
        }
        


    })
    return res.status(200).json({
        data:users
    })
}

//get user by id
export const getUserById = async(req,res)=>{
    const userId=req.params.id
    const user=await prisma.user.findFirst({
      where:{
        id:Number(userId)
      },
       include:{
            // will give all info
            // post:true,
            post:{
                select:{
                    title:true,
                    comment_count:true
                }
            }
        }
    })
    return res.status(200).json({
        data:user
    })
}

//delete user
export const deleteUser= async (req,res)=>{  
    const userId=req.params.id    
    const user=await prisma.user.findFirst({
        where:{
            id:Number(userId)
        }
    })
    //agar user nahi mila toh error fainko
    if(!user){
      return res.status(404).json({ message: "User not found" });
    }
    // User mil gaya toh delete karo
    // if you want to delete many records as chron jobs use delete many
    const deleteUser=await prisma.user.delete({
      where:{
        id:Number(userId),
      },
    });
    return res.status(200).json({
        message: "User deleted successfully",
        deleted_user_data:deleteUser
    });
}

