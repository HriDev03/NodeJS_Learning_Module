
/*

    -------------------------------  THIS KEYWORD -----------------------------------------
    THIS IS A KEYWORD IN Js that we can access , in global scope it points to window Object
    and it is used to point to a particular object

    if we cal THIS INSIDE AN OBJECT it will point to that object

*/

// in global scope THIS refers to the global scope
// But when called for an object this will point to that particular object


// java script gives us ways to make our function private
// when we use new keyword in front of a function itll return an object

function sayHi(){
    console.log(this);
}

new sayHi(); // this will point to this particular obj

function CreateUser(firstName,lastName,age){
    // if key and values are same no need to write them seperately firstName:firstName,
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
}

const userA=new CreateUser('Hri','Sharma','21')
const userB=new CreateUser('Hri','Sharma','22')

// function getBirthYear(){
//     return new Date().getFullYear()-this.age
// }

// function createUserr2(firstName,lastName,age){
//     const user={
//         // if key and values are same no need to write them seperately firstName:firstName,
//         firstName,
//         lastName,
//         age,
//         getBirthYear,
//     }
//     return user;
// }



//THIS KEYWORD DETAILS
/*  
    also is different in strict and nn strict mode , 
    determinded by how our function is called, THIS KEYORD uss object ko point karta hai jii object ne 
    kisi function ko call kiya ho 
    -----------------------------------WE USUALY WRITE THIS INSIDE A FUNCTION 

    in terminal this ------> point to----> Global space
*/

console.log(this);

//constructor function

function Hii(){
    this.hello='Hello',
    console.log(this);
}

//called with new keyword it return us an object and this will point there
new Hii()
Hii()// here wll point to global 

const user1={
    firstName: "Hri",
    lastName: "Sharma",
    tags: ['a','b','c'],
    // here this wol point toour user object as it is called by the user object
    getFullName(){
        this.name="hri"
        // return `${this.firstName} ${this.lastName}`
        //this is a regular function and itll point to global
        function getAge(){
            console.log("getting age");
            console.log(this);
        }
        // agar koi Obj/function ke andar koi method hai and uske andar ek aur function hai toh voh Internalfunction will point to the window
        getAge();
        console.log(this);// inside our fullName method it'll point to our object
    },
    printTags(){
        this.tags.forEach((tag)=>{
            console.log(tag);
            // will again point to window as it is called by for each
            console.log(this);
        }, this)//{}
        /*
            itll point to our user object
            pointer kaha point karega
        */
    }
}  
//-----------------------------------------------------------------------------------------------//
// IMP CORNER CASE : FUNCTION KE ANDAR FUNCTION(clg(this))  ----->  will point back to window   //
//---------------------------------------------------------------------------------------------//                              
// THIS In case of event Listeners
const h1=document.querySelector('h1')
//event will listen or point to that componet to which event listener is attatched to 
h1.addEventListener("click",()=>{
    console.log(this);
})
//event listener : in case of event LISTENER THIS sirf vohi point  karega jaha usse attatch kiya hai
//IN CASE OF ARROW FUNCTIONS
//BEHAVIOUR OF THIS IN CASE OF ARROW FUNCTIONS 
const user2={

    firstName: "Hri",
    lastName: "Sharma",
    tags: ['a','b','c'],
    
    // A NORMAL METHOD WILL POINT TO THE CLASS/OBJ IN WHICH IT IS PRESENT AND WHAT IS CALLING IT 
    printTags(){
        console.log(this);
    },

    //WHAT IN CASE OF ARROW FUNCTION
    printTagg:()=>{
        console.log(this);
        //will again point to the widow
        //arrow function shoudnt be used as a method and 
        // dont has  its own binding to this , arguments and super 
        // directly attatched to the window
    }
}

// in case of classes
class User3{    

    constructor(){
        this.firstName='Hridyesh'
        console.log(this);  // it'll point to the obj hat we will make using this class
    }

    getUser(){
        console.log(this);
    }
}

new User3();                                