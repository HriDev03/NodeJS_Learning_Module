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

// Now all this data stores seperately inside different memory location that was not efficient

// created only once in the memory

//polymorphism : it works for all the changing values
// but this breaks abstraction


/*


classes were introduced in ES6 (2015) as syntactic sugar over constructor 
functions. That means under the hood, classes still use functions and prototypes, 
but they offer a cleaner, more structured way to write object-oriented code.


| Feature                   | Constructor Function                              | ES6 Class                            |
| ------------------------- | ------------------------------------------------- | ------------------------------------ |
| **Syntax**                | Older, function-based                             | Newer, cleaner syntax                |
| **Method Definition**     | Manually added to `.prototype`                    | Defined directly inside the class    |
| **Calling without `new`** | No error, may cause bugs                          | Throws a `TypeError`                 |
| **Inheritance**           | Manual via `Object.create` or setting `__proto__` | Easy with `extends` and `super()`    |
| **Strict Mode**           | Not strict by default                             | Always in strict mode                |
| **Hoisting**              | Hoisted (function declarations)                   | Not hoisted (must be declared first) |
    
    
*/
   // constructor function should start with capital letter 
/* 
jab costructor function ko call karege with new keyword itll return us an object
and this will point to that particular object , and then we insert the required value

*/


//  CLASSES : a syntax suger built on top of constructor functions
//CLASS EK constructor function hii hai behind the scene 
//can not be called without new keyword
class CreateUser{
    //Methods
    getBirthYear(){
        return new Date.now()-this.age
    }
    getFullName(){
        return this.firstName+" "+this.lastName; 
    }
}

class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName,
        this.lastName=lastName,
        this.age=age
    }
   
    getBirthYear(){
        // date is a constructor function that will return as an Object
        return new Date().getFullYear()-this.age
    }
 
    eat(){
        console.log("User is eating");
    }
 
    //getter Function
    get fullName(){
        console.log("getter fuction.....");
        console.log(`${firstName} ${lastName}`);
    }
    //setter Function
    set fulllNamee(value){
        const[firstName,lastName]=value.split(" ")
        this.firstName=firstName
        this.lastName=lastName
    }
 
}
const userA=new User('Hri','Sharma','21')
const userB=new User('Hri','Sharma','22')
 
 
class Employee extends User{
    constructor(firstName,lastName,age,company){
        super(firstName,lastName,age)
        this.company=company
    }
    work(){
        console.log("Working");
    }
    // agar dono mai same naam ka method hota 
    eat(){
        console.log('Employee is eating lunch');
    }
}
const student1=new Student("Hridy","sharma",21,"Btech")
const emp1=new Employee("Hridyy","sharmaa",17,"INNOVA")
 
// PRIVATE AND PUBLIC FIELDS
class CreateUser{
    #age;                 
    // aka public class felds
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        //earlier
        //this._age=age;
        this.#age=age;
    }
    // #private property
    #hi='Hello Jii';

    getBirthYear(){
        console.log(this.#hi);
        // we can only call our private function inside some other function that too with this.methodName()
        this.#getFullName();
        return new Date().getFullYear()-this.#age;
    }
    //private methods
    #getFullName(){
        console.log(`${this.firstName} ${this.lastName}`);;
    }
}

const a={
    name:"Hri",
    "#age":21
}

// to access it a['#age'] we cant access it in casses
// STATIC PROPERTIES
class CreateUser{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    //we can make static property with the help of static keyword
    // it will be attatched to our CreateUser class directly
    static run="Running"
    
    //static block : the code in static will automatically run will be accessible only in the class
    static{
    
        console.log('hello');
        // in static block this points to our class
        this.hey="HelloJee"
    
    }
    // here this points to the individual Obj that is made
    getBirthYear(){
        this.getFullName();
        return new Date().getFullYear()-this.age;
    }
    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`);;
    }
}
// another way to add static property
CreateUser.myName='Hri'

