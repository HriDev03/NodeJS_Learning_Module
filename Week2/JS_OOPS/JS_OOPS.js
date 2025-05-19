// Our Oject : having methods and properties
/*
    const user1={
        firstName: 'Hridyesh',
        lastName:"Sharma",
        age:'2004',

        getAgeYear:function(){
            return new Date().getFullYear()-user1.age
        }
    }
*/

//  Encapsulate : TO encapsulate our methods and properties with in an Obj or a class
// Abstraction  : To Hide the complexity of our implementation , Our end user need not to know how we are implimenting something


// Agar multiple users bananehai toh baar baar code repeate karnaa padhta

/*
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
*/

// to solve this issue we got factory function
// it is like a factory we will provide the input and well get an object as an output
// FACTORY FUNCTIONS : FUNCTIONS THAT WILL RETURN US OBJECTS

/*
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
*/

// Now all this data stores seperately inside different memory location that was not efficient
// in global scope THIS refers to the global scope
// But when called for an object this will point to that particular object
// created only once in the memory

//polymorphism : it works for all the changing values
// but this breaks abstraction

/*

    -------------------------------  THIS KEYWORD -----------------------------------------
    THIS IS A KEYWORD IN Js that we can access , in global scope it points to window Object
    and it is used to point to a particular object

    if we cal THIS INSIDE AN OBJECT it will point to that object

*/

// function getBirthYear(){
//     return new Date().getFullYear()-this.age
// }

// function createUser(firstName,lastName,age){
//     const user={
//         // if key and values are same no need to write them seperately firstName:firstName,
//         firstName,
//         lastName,
//         age,
//         getBirthYear,
//     }
//     return user;
// }

// // java script gives us ways to make our function private
// // when we use new keyword in front of a function itll return an object

// function sayHi(){
//     console.log(this);
// }

// new sayHi(); // this will point to this particular obj


// function CreateUser(firstName,lastName,age){
//     // if key and values are same no need to write them seperately firstName:firstName,
//     this.firstName=firstName
//     this.lastName=lastName
//     this.age=age
// }

// // sabko iss ka access mill jaaye ga  aur ek hii jagah rahe ga
// CreateUser.prototype.getBirthYear = function(){
//     return new Date().getFullYear()-this.age
// }

// // function we are calling by using our new keyword is our construcor function
// // new createUser("hii")

// const user1=new CreateUser("Hri","sharma",21)
// // without new keyword this will point to window object
// const user2= CreateUser("Hri","sharma",21)



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


/*

    Definition of Prototype (in JavaScript):
        A prototype is an object that other objects can inherit properties and methods from. In JavaScript, 
        every function has a .prototype property, and every object has an internal [[Prototype]] (accessible via __proto__),
        which forms the basis of JavaScript's prototypal inheritance.

    Think of it like this:
        A prototype is a blueprint for objects.

    If an object doesn't have a property or method, JavaScript looks up its prototype to try to find it.

    Example:
        
        function Person(name) {
             this.name = name;
        }

        // Add a method to the prototype
        Person.prototype.greet = function() {
            console.log("Hello, " + this.name);
        };

    const p1 = new Person("Alice");

    // greet is not defined on p1 directly...
    console.log(p1.greet); // Found via prototype chain

    Summary:
   
    .prototype → Property on a constructor function, used to define what instances inherit.

    __proto__ → Internal reference on an object, points to its prototype (usually the 
    .prototype of the constructor that made it).

*/


// every function has a prototype property
// when we make an object using a constructor function prototype property will be attatched and will be called [    _proto_     ]
// if we created some function and add it into prototype of the constructor function it also moves to the object made by it in the form of proto


// Hrr ek function ke paas ek prototype hota hai , its like a simple object and when we add any method to it , it'll get set in the _proto_ of our object that we will make and we'll be able to access it

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  CLASSES : a syntax suger built on top of constructor functions
//CLASS EK constructor function hii hai behind the scene 
//can not be called without new keyword
class CreateUser{

    //Methods
    //
    getBirthYear(){
        return new Date.now()-this.age
    }
    getFullName(){
        return this.firstName+" "+this.lastName; 
    }
}