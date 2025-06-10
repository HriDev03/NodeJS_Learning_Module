import mongoose ,{Schema} from "mongoose"


const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true,// will make our field searchable
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,// will get this from cloudinary url
        required:true,
    },
    coverImage:{
        type:String,// will get this from cloudinary link
    },
    watchHistory :[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String
    }
},{
    timestamps:true
})

//jaise hii data save hone waala hai uss se just pehle khuch karna ho toh
// jab password related kuch ho tabh isse call karo
if(!this.isModified("password")){
    //agar modified nahi hua then next
    return (next)
}

//agar kuch chane hua then change 
userSchema.pre("save", async function(next){
    // password encrypted
    this.password=bcrypt.hash(this.password,10)
    next()
})


userSchema.methods.isPasswordCorrect=async function (password) {
    // it will return true or false
   return await bcrypt.compare(password,this.password)
}

//jwt is a bearertoken jo bhi usse bear karta hai uss voh sahi maanta hai
//jab model store hoga it will be stored as users

userSchema.methods.generateAccessToken= function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken= function(){
return jwt.sign(
        {
            // yeh baar baar refresh hota hai issliye send less data here
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User=mongoose.model("User",userSchema)