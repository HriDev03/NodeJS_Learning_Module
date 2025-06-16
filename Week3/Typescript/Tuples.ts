// when we know that the number of elements are fixed , can be of ay data type

//there are only fixed number of elements

//BEST PRACTICE , MAKE TUPLES READ ONLY
// it should not be modified 
type personInfo = readonly [string,number,boolean]


//example
const person1 : personInfo=['Hridyesh',20,true]

// tuples mai order matter karta hai 
// const person3 : personInfo=['Hridyesh',false,21]
const displayPersonInfo=(person:personInfo):void=>{
    const [name , age , hasDrivingLicense]=person;
    console.log(`Hi ${name}, you are ${age} years old and
        
        ${hasDrivingLicense?"have a ":"Does Not have a "} 
         
        Driving License `);
}

displayPersonInfo(person1)