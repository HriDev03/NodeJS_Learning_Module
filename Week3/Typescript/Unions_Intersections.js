"use strict";
// two sets , union : common data + uncommon data of set A/B : |
//            Intersection : only elements present in both the sets : &
// ek input field hai , where there is description , abb user waha kuch bhi de sakta hai 
const inputVal = (value) => {
    console.log(value);
};
inputVal(55);
inputVal("Hello World");
inputVal(false);
const userInput = (value) => {
    if (typeof (value) === 'number') {
        return value * 2;
    }
    else if (typeof (value) === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error('Invalid Input Data');
    }
};
console.log(userInput(10));
console.log(userInput("hridyesh"));
// dono ki dono property honi chahiye
const employeehu = {
    name: "hri",
    age: 21,
    emp_id: 111,
    department: "IT"
};
console.log(employeehu);
const user = {
    name: "Hri",
    age: 20
};
const address = {
    city: "Jammu",
    country: "India"
};
// const createUserProfile=(user:User,location:MyLocation):string=>{
//     return(`My name is ${user.name} and i am ${user.age}, I am living in ${location.city}`);
// }
const createUserProfile = (user, location) => {
    return { ...user, ...location };
};
//comple details ki baat
const myCompleteInfo = createUserProfile(user, address);
console.log(myCompleteInfo);
