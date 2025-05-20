//OOPS : a way of writing our code


// Encapsulate : TO encapsulate our methods and properties with in an Obj or a class, wrapper
// Abstraction  : To Hide the complexity of our implementation , Our end user need not to know how we are implimenting something, eg:fetch


// OBJECT LITERAL: making an obj literally WITH THE HELP OF {}, basic unit
//literally making an object
// Our Obect : having methods and properties

//new : Ek Hii Object literal se multiple instances bana rahe ho
const user1={
    firstName: 'Hridyesh',
    lastName:"Sharma",
    age:'2004',
    signedIn:true,
    getAgeYear:function(){
        return new Date().getFullYear()-user1.age
    },
    getUserDetails(){
        //jab bahar se saman lena hai tabh batana hai ki apna saman lena hai
        console.log(`${this.firstName}`);
        console.log(this);
    }
}
console.log(user1.age);

const user2={
    firstName: 'Hri',
    lastName:"Sharma",
    age:'2003',

    // getAgeYear:function(){
    //     return new Date().getFullYear()-user.age
    // }
    getAgeYear(){
        return new Date().getFullYear()-user2.age
    }
}


// to solve this issue we got factory function
// it is like a factory we will provide the input and well get an object as an output
// FACTORY FUNCTIONS : FUNCTIONS THAT WILL RETURN US OBJECTS


function createUser(firstName,lastName,age){
    const user={
        // if key and values are same no need to write them seperately            firstName:firstName,
        firstName,
        lastName,
        age,
        // created only once in the memory
        getBirthYear(){
            return new Date().getFullYear()-user.age
        }
    }
    return user
}

const user3=createUser('Hri','Sharma',22)
const user4=createUser('Hridyesh','Sharma',20 )



// CONSTRUCTOR FUNCTION : It'll give us new copy/instance/objects
function user(userName,age,isLoggedIn){
    this.userName=userName,
    this.age=age,
    this.isLoggedIn=isLoggedIn
    // return this by default it is returned

    this.greeting=function(){
        console.log(`Welcome ${this.userName}`);
    }
    return this
}
const userOne=new User("Hri",21,true);
const usertwo=new User("Hrii",22,false);

console.log(userOne.constructor);
console.log(usertwo);

//How NEW works : 
// 1) An Empty Object is created(Instance)
// 2) Constructor function is called , cuz of new keyword and all the data is injected in our instance
// 3) we get a new instance of class/constructor function



//new keyword BEHIND THE SCENES
/*
    new keyword inititates the creation of new javascript object
    prototype is linked : the object gets linked to the  properties of constructorS PROTOTYPE
    and theb new object is returned
*/


// Now all this data stores seperately inside different memory location that was not efficient

// created only once in the memory

//polymorphism : it works for all the changing values
// but this breaks abstraction

