//create a token and set it in a cookie
// setting the generated jwt token into the cookie

const getJwtToken=require("../helpers/getJwtToken")

const cookieToken=(user,res)=>{
    //put the cookie in users cookie and protect it
    const token=getJwtToken(user.id)
    
    //options for cookie
    const options={
        expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000 ),
        // we can only manuplate it through the server, 
        // user will not be able to manuplate the cookie , server only cookie
        httpOnly:true
    }

    user.password=undefined
    // sending cookie in the response , setting the jwt tokn manually but setting
    // it in users cookie with different options
    res.status(200).cookie('token',token,options).json({
        sucess: true,
        token,
        user
    })
}
 
module.exports = cookieToken
