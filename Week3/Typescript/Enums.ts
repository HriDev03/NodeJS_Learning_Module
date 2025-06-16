// array of all possible values that we can give to a property , choosing one value from multiple options

//enum define krr diya idhar jii
enum Roles {
    user="user",
    admin="admin"
}

type loginDetails={
    name?:string,
    email:string,
    password:string,
    role:Roles
}

const user1 : loginDetails={
    email:"example@gmail.com",
    password:"1234abc@",
    role:Roles.admin
}

const user2 : loginDetails={
    email:"example2@gmail.com",
    password:"1234abc@",
    role:Roles.user
}

const isAdmin=(user1:loginDetails):boolean=>{
    const {role}= user1;
    if(role===Roles.admin){
        console.log("Hey Admin");
        return true;
    }
    console.log("hey user");
    return false;
}
console.log("Calling for admin");
isAdmin(user1);
console.log("Calling for user");
isAdmin(user2); 