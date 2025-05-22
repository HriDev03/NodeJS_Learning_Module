
// /*


// classes were introduced in ES6 (2015) as syntactic sugar over constructor 
// functions. That means under the hood, classes still use functions and prototypes, 
// but they offer a cleaner, more structured way to write object-oriented code.


// | Feature                   | Constructor Function                              | ES6 Class                            |
// | ------------------------- | ------------------------------------------------- | ------------------------------------ |
// | **Syntax**                | Older, function-based                             | Newer, cleaner syntax                |
// | **Method Definition**     | Manually added to `.prototype`                    | Defined directly inside the class    |
// | **Calling without `new`** | No error, may cause bugs                          | Throws a `TypeError`                 |
// | **Inheritance**           | Manual via `Object.create` or setting `__proto__` | Easy with `extends` and `super()`    |
// | **Strict Mode**           | Not strict by default                             | Always in strict mode                |
// | **Hoisting**              | Hoisted (function declarations)                   | Not hoisted (must be declared first) |
    
    
// */
//    // constructor function should start with capital letter 
// /* 
// jab costructor function ko call karege with new keyword itll return us an object
// and this will point to that particular object , and then we insert the required value

// */


// //  CLASSES : a syntax suger built on top of constructor functions
// //CLASS EK constructor function hii hai behind the scene 
// //can not be called without new keyword
// class CreateUser{
//     //Methods
//     getBirthYear(){
//         return new Date.now()-this.age
//     }
//     getFullName(){
//         return this.firstName+" "+this.lastName; 
//     }
// }



//Gettres and Setters
// const user={
//     firstName:"Hridy",
//     lastName:"Sharma",
    
//     get fullName(){
//         console.log("getting ..... ");
//         return(`${this.firstName}${this.lastName}`)
//     },
    
//     set fullName(value){
//         console.log("Setting.........");
//         const [firstName,lastName]=value.split(" ")
//         this.firstName= firstName
//         this.lastName=lastName
//     }
// }
// console.log(user);
// user.fullName="abc XYX";
// console.log(user);


// class User{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName,
//         this.lastName=lastName,
//         this.age=age
//     }
   
//     // getBirthYear(){
//     //     // date is a constructor function that will return as an Object
//     //     return new Date().getFullYear()-this.age
//     // }
 
//     // eat(){
//     //     console.log("User is eating");
//     // }
 
//     //getter Function
//     get fullName(){
//         console.log("getter fuction.....");
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
//     //setter Function
//     set fullName(value){
//         const[firstName,lastName]=value.split(" ")
//         this.firstName=firstName
//         this.lastName=lastName
//     }
// }


// const userA=new User('Hri','Sharma','21')
// console.log(userA);
// userA.fullName;
// userA.fullName="Hridy Sharmaaaaa";
// console.log(userA);
// userA.fullName;
// const userB=new User('Hri','Sharma','22')
 
// SOME DEEP STFF ABOUT GETTERS AND SETTERS
//making changes directly in the constructor
class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email=value;
    }

    get password(){
        //making a new property all together to avoid race condition
        return this._password.toUpperCase();
    }
    //almost like a private property
    set password(value){
        this._password=value.toUpperCase();
    }
    //define properties are like getters and setters 
}
const user1=new User("user1@gmial.com","123@Abc")
console.log(user1);

const Userr={
    _emial:'hridev@gmail.com',
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value;
    }

}
// class Employee extends User{
//     constructor(firstName,lastName,age,company){
//         super(firstName,lastName,age)
//         this.company=company
//     }
//     work(){
//         console.log("Working");
//     }
//     // agar dono mai same naam ka method hota 
//     eat(){
//         console.log('Employee is eating lunch');
//     }
// }
// const student1=new Student("Hridy","sharma",21,"Btech")
// const emp1=new Employee("Hridyy","sharmaa",17,"INNOVA")
 
// // PRIVATE AND PUBLIC FIELDS
// class CreateUser{
//     #age;                 
//     // aka public class felds
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         //earlier
//         //this._age=age;
//         this.#age=age;
//     }
//     // #private property
//     #hi='Hello Jii';

//     getBirthYear(){
//         console.log(this.#hi);
//         // we can only call our private function inside some other function that too with this.methodName()
//         this.#getFullName();
//         return new Date().getFullYear()-this.#age;
//     }
//     //private methods
//     #getFullName(){
//         console.log(`${this.firstName} ${this.lastName}`);;
//     }
// }

// const a={
//     name:"Hri",
//     "#age":21
// }

// // to access it a['#age'] we cant access it in casses
// // STATIC PROPERTIES
// class CreateUser{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }

//     //we can make static property with the help of static keyword
//     // it will be attatched to our CreateUser class directly
//     static run="Running"
    
//     //static block : the code in static will automatically run will be accessible only in the class
//     static{
    
//         console.log('hello');
//         // in static block this points to our class
//         this.hey="HelloJee"
    
//     }
//     // here this points to the individual Obj that is made
//     getBirthYear(){
//         this.getFullName();
//         return new Date().getFullYear()-this.age;
//     }
//     getFullName(){
//         console.log(`${this.firstName} ${this.lastName}`);;
//     }
// }
// // another way to add static property
// CreateUser.myName='Hri'

// //classes , static methods , static functions , private methods , private properties , getters setters
// class parent{
//     name="hrii"
//     age=23
// }

// class child extends parent{
//     constructor(game){
//         super()
//         this.game=game
//     }
// }
// const child1=new child("football")
// console.log(child1);


