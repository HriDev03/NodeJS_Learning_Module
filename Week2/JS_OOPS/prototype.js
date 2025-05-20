
// A prototype is an object that other objects can inherit properties and methods from. In JavaScript, 

// prototypal behavior hai js ka , would move up to find functions and properties
// new keyword, classes , this keyword, inheritance everthing is becaise of prototype
//yaha nahi mila toh aur upar

// A prototype is a blueprint for objects.
// If an object doesn't have a property or method, JavaScript looks up its prototype to try to find it.
    
// .prototype → in case of constructor function its like the common memory sapace jaha hamare functions defined honge and will point to a single memory
// __proto__ → jab constructor class ka object bana diya athen it'll be passed to the proto property of the obj that will point to the protoype of the cnstructor and will inherit the functions from there

function Person(name){
    this.name=name;
}

Person.prototype.greet=function(){
    console.log("hey"+this.name);
};
const p1=new Person("Hri");

// it was not present as a method in the person constructor function but added later to the prototype
console.log(p1.greet);

// every function has a prototype property
// when we make an object using a constructor function prototype property will be attatched and will be called [    _proto_     ]
// if we created some function and add it into prototype of the constructor function it also moves to the object made by it in the form of proto


// Hrr ek function ke paas ek prototype hota hai , its like a simple object and when we add any method to it , it'll get set in the _proto_ of our object that we will make and we'll be able to access it

function CreateUser(firstName,lastName,age){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
}

// sabko iss ka access mill jaaye ga  aur ek hii jagah rahe ga
CreateUser.prototype.getBirthYear = function(){
    return new Date().getFullYear()-this.age
}

// function we are calling by using our new keyword is our construcor function
// new createUser("hii")

const user1=new CreateUser("Hri","sharma",21)
// without new keyword this will point to window object
const user2= CreateUser("Hri","sharma",21)
user1.getBirthYear();
//behind the scene prototypes sab karte hai under the hood


//everything in js is an object Array, Strings 
// jo property object ke paas hai , the sae properties Strings and Arrays  will have

function multiPlyBy5(num){
    return num*5;
}
multiPlyBy5.power=2;
console.log(multiPlyBy5(5));
//function is also an object kyuki sab kuch object se mila hai
console.log(multiPlyBy5.power);
console.log(multiPlyBy5.prototype);//iss method ka this hai 
//prototype ki properties and this ka context is present


function createUser(username,age){
    this.username=username
    this.age=age
}

createUser.prototype.increment=function(){
    //jisne bulaya hai uska increase krr do
    this.score++; //score kiska increase karu, 250 ko increase karo yaa 25 ko
    //jisne bhi bulaya hai usseke current context mai value increase karo
}


createUser.prototype.printMe=function(){
    //jisne pucha hai uska bata do
    console.log(`age is ${this.age}`);; //score kiska increase karu, 250 ko increase karo yaa 25 ko
    //jisne bhi bulaya hai usseke current context mai value increase karo
}

const userr1=new createUser("Hridyesh",21)
const userr2=new createUser("Hridyeshh",22)

let myHero=['IronMan','spiderMan']
let heroPower={
    
    IronMan:"Arc Reactor 3000",
    spiderMan:"Spidey Sense",

    getSpiderPower:function(){
        console.log(`Spider power is ${this.spiderMan}`);
    }
}

//seedha object mai naayi property add krr do it'll be passed to all other stuff like Arrays , Objects and Functions
// every thing is an object soo it will be added tp everything like array, obj
Object.prototype.Avengers=function(){
    console.log("Avengers assemble");

}
//only added to array
Array.prototype.End=function(){
    console.log("3000");

}

//accessing the prototype in object
heroPower.Avengers()
//accessing the prototype in ARRAY
myHero.Avengers();
myHero.End();// wont be present cuz added only in the array prototype


//HOW INHERITANE WAS DONE EARLIER using prototype
//PROTOTYPAL INHERITANCE
const User={
    name:"hri",
    email:"xyz@gmail.com"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"JS DEV NODE",
    fullTime:true,
    __proto__: TeachingSupport,// how prototype was usedearlier for inheritance
}

Teacher.__proto__=User


//modern : how teaching support will get all the property of teacher
Object.setPrototypeOf(TeachingSupport,Teacher)


// SOLVE THIS PROBLEM 
/*
    let myName="hridyesh    "
    let myDev="hri03        "
    console.log(myName.trueLength);
*/
//i want to create a global method for strings that will return the true length of a string by removin gwhite spaces , cant use .trim() directly
let myName="Batman      "
String.prototype.trueLength=function(){
    console.log(`true length of ${this.name} is ${this.trim().length}`);
}
