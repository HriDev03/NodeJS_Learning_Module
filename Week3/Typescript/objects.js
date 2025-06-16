"use strict";
// Objects in TypeScript
// objects are used to represent data in the form of key value pairs
// person info 
const product = {
    name: "Tissot",
    price: 1000000,
    quantity: 2,
    model: {
        code: "XD47AD14",
        date: "16/06"
    }
};
console.log(product);
const product1 = {
    name: "Laptop",
    price: 50000,
    quantity: 100
};
const person = {
    name: "Hri",
    age: 20,
    isStudent: true,
    //WANT ADDRESS , PINCODE , CITY NAME THATS WHY USING NESTED OBJECTS
    address: {
        city: "Jammu",
        country: "India",
        pincode: 180002
    }
};
const person2 = {
    name: "Hriidyesh",
    age: 21,
    isStudent: false,
    //WANT ADDRESS , PINCODE , CITY NAME THATS WHY USING NESTED OBJECTS
    address: {
        city: "Hydrabad",
        country: "India",
        pincode: 180002
    }
};
const calculateTotalPrice = (prod) => {
    return prod.price * prod.quantity;
};
console.log(calculateTotalPrice(product));
// console.log(person.address.city);
// person.address.city="Hyd";
// console.log(person.address.city);
console.log(person);
const student1 = {
    name: "Hri",
    age: 21,
    greet: (country) => `Hello my name is ${student1.name} , i am ${student1.age} years old  and i am from ${country}`
};
// const introduction =( student1:Student):string=>{
//     const {name,age}=student1;
//     return `Hello my name is ${name} , i am ${age} years old `
// }
// console.log(introduction(student1));
console.log(student1.greet("India"));
