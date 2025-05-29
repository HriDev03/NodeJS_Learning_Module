/*
JSON.Stringify() : when we are passing data to a string we use it
JSON.parse() : when we are getting res from server as String and need to use it we will convert that into js obj for that we will use JSON.parse()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

JSON.STRINGIFY():

    Used to convert Js-OBJECT to String
    can also convert array into String
    if there is any functions in the object it will remove that function

    if we want to have function when we convert obj to string--> convert function to strings before using JSON.Stringify()
    date objects are also convert into string

    USE CASES:
    1) sending data to server
    2) storing data into browser

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

JSON.parse(): 
    used to convert string into JS Object, 
    if we have converted JS array into array using json.stringify() and then we apply json.parse() itll will return array

    when getting data from server we need to change it from string  to json so that we can do operations on it

    We should avoid using functions in JSON() they will loose their scope and have to use eval() to convrt them back into functions
    date objects are not allowed in JSON , if we need to include a date write it as a string

*/

let car={
    name:"Mahindra",
    model:"Be6E",
    price:"25L",
    purchaseDate:new Date(),
    getModel:function(){
        return this.model
    }
}




console.log("car normal  Obj is\n",car);
console.log(typeof(car));
console.log("\n");

console.log("----------------------------------------------------");


// to pass it to server calls we needto change it into strings
// function will be removed
// when we convert from object to string functions, symbols and undefined values are removed

// let carString=JSON.stringify(car)
// console.log("car string is after stringify",carString)
// console.log(typeof(carString));

//to avoid this first change function into string before JSON.stringify()
car.getModel=car.getModel.toString();
let carString=JSON.stringify(car)

console.log("car string is after stringify",carString)
console.log(typeof(carString));
console.log("\n");
console.log("\n");

//after performing some ops convert string to JS Object
let carObj=JSON.parse(carString);

//to get function into its proper format
carObj.getModel=eval(`(${carObj.getModel})`);

// CONVERTED INTO DATE FORMAT AGAIN
carObj.purchaseDate=new Date(carObj.purchaseDate)
console.log("car object after parse");

console.log(carObj);//it will be converted to String
console.log("\n");
console.log("\n");



/* Reviver and replacer */
//.parse()
// reviver: tells us how we want to parse the string

//stringify
// replacer: used in strigify , used to control which property we dont want to send
// space: to show our string in a pretty way

//replacer bata dega which property to avoid
// a)callback function : we can dynamically not allow any property to not be passed
//b) array: we can write the roperties that should be allowed to be converted to string





//USE : we can use it to store data in local storae

