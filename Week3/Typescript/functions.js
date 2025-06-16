"use strict";
// FUNCTIONS IN TS
/*

    FUNCTION INVOCATION
        
        someFunc()
*/
//function declaration
// values defined in the function parameters
function greet(a, b) {
    console.log(`Hello ${a} your empId is ${b}`);
}
const greet2 = (a, b) => {
    console.log(`Hello ${a} your empId is ${b}`);
};
//function invocation
//values passed while calling a function : arguments
greet("Hri", 1);
greet2("Hridyesh", 2);
//HOW TO SPECIFY FUNCTION RETURN TYPE IN TS
//return a string
const greet3 = (a, b) => {
    return (`Hello ${a} your empId is ${b}`);
};
//optional and default parameters in Ts , assign values to parameters itself
const greet4 = (a, b = 1) => {
    return (`Welcome ${a} your id is ${b}`);
};
const emp = greet4("Hridy");
console.log(emp);
//optional parameters  ? after parameter
const greet5 = (a, b) => {
    return (`Welcome ${a} your id is ${b}`);
};
const employee = greet5("Hridy");
console.log(employee);
//9 thapa
