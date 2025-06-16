// Objects in TypeScript
// objects are used to represent data in the form of key value pairs

// person info 
const product:{
    name:string,
    price:number,
    quantity:number
    model:{
        code:string,
        date:string
    }
}={
    name:"Tissot",
    price:1000000,
    quantity:2,
    model:{
        code:"XD47AD14",
        date:"16/06"
    }
}

console.log(product);


type Product={
    name:string,
    price:number,
    quantity:number
}


const product1:Product={
    name:"Laptop",
    price:50000,
    quantity:100
}

/*

    type ALIASES ek baar type define krr do firr 
    koi zururat nahi , name to a specific type or combination of type

*/


type Address = {
  city: string;
  country: string;
  pincode: number;
};

//type define krr rahe hai         
// type of person define krr di will give us more controls 
type Person={
    name:string;
    age:number;
    isStudent:boolean;
    address?:Address // optional property
}

const person:Person={
    name:"Hri",
    age:20,
    isStudent : true,
    //WANT ADDRESS , PINCODE , CITY NAME THATS WHY USING NESTED OBJECTS
    address:{
        city:"Jammu",
        country:"India",
        pincode:180002
    }
}

const person2:Person={
    name:"Hriidyesh",
    age:21,
    isStudent : false,
    //WANT ADDRESS , PINCODE , CITY NAME THATS WHY USING NESTED OBJECTS
    address:{
        city:"Hydrabad",
        country:"India",
        pincode:180002
    }
}

const calculateTotalPrice=(prod:Product):number=>{
    return prod.price*prod.quantity;
}
console.log(calculateTotalPrice(product));

// console.log(person.address.city);
// person.address.city="Hyd";
// console.log(person.address.city);
console.log(person);


/*

FUNCTION CALL SIGNATURE
METHOD KO DEFINE KRR RAHE HO INSIDE AN OBJECT , METHOD KE TYPE KO DEFINE KRR RAHE HO

Function call signature refers to the declaration or defination of a function
which includes functions name, parameters and return types


Lets add one function inside the object, more like creating a method in object

agar function ki info batani ho without including the function body

call signatures are typically used inside object  to describe the shape of functions within object types

*/


type Student ={
    name:string;
    age:number;
    gender?:string;
    //function parameters will be of string type and wil return string
    greet:(country:string)=>string //method call signature
    //function ka structure aur call signature define kiya hai 
  
}

const student1:Student={
    name:"Hri",
    age:21,
    greet:(country):string => `Hello my name is ${student1.name} , i am ${student1.age} years old  and i am from ${country}` 
}

// const introduction =( student1:Student):string=>{
//     const {name,age}=student1;
//     return `Hello my name is ${name} , i am ${age} years old `
// }

// console.log(introduction(student1));


console.log(student1.greet("India"));