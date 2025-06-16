"use strict";
// when we know that the number of elements are fixed , can be of ay data type
//example
const person1 = ['Hridyesh', 20, true];
// tuples mai order matter karta hai 
// const person3 : personInfo=['Hridyesh',false,21]
const displayPersonInfo = (person) => {
    const [name, age, hasDrivingLicense] = person;
    console.log(`Hi ${name}, you are ${age} years old and
        
        ${hasDrivingLicense ? "have a " : "Does Not have a "} 
         
        Driving License `);
};
displayPersonInfo(person1);
