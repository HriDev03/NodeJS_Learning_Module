"use strict";
// TypeScript is Js with extra powers
console.log("Welcome Hri !");
//variable ke saath datatype bhi define krr diya idhar toh
var num = 5;
/*
    cant do it ---> WORNG
    // NUBER WAALE VARIABLE MAI STRING NAHI ASSIGN KRR SAKTE
    num="Hridyesh"

    JAB BHI TYPESCRIPT LIKHTE HO TOH TABH USS NUMBER KA , OBJEXT KA , ARRAY KA , VARIABLE KA :-> TYPE LIKHNA PADHTA HAI

*/
//  :type Annotation  what will this function expect : numers, and what will it return Number
const sum = (a, b) => {
    return a + b;
};
//function call
console.log(sum(5, 10));
//it is not correct
//error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
//console.log( sum(5,"Million"))
//type annotation
/*

    let numFavNum : number = 10;
    let fullName : string = "HRIDYESH SHARMA"

    HOW MANY TYPES IN TYPESCRIPT
    undefined,void, null , any:number,bigint,boolean,string,number and many more....

    typesafety , typesafety , What operations could we perfrom on that variable or value

*/
//NUMBER DATATYPE
let numFavNum = 10;
let fullName = "HRIDYESH SHARMA";
let sum1 = numFavNum + 10;
console.log(numFavNum.toString());
// the number type represents numeric values , integers and floting point numbers
//used for arithmetic operations
let myFavNum = 3;
let myAge = 20;
let pi = 3.1415;
let myNegVal = -5;
// positive,negative,decimal these all are numbers
//its still number
let nanValue = NaN;
/*
    STRING DATATYPE
    value in single or double quotes is used as Strings
*/
let myName = "Hridyesh Sharma";
let MyLastName = 'Sharma';
let MyFullName = myName + MyLastName;
console.log(MyFullName);
// strings practice
let message = "Hello Ts";
let sentence = "THIS IS MY TS TUTORIALS , HEY HELLO";
let sentenceLength = sentence.length;
console.log(sentenceLength);
let text = "THIS IS MY TS TUTORIALS , HEY HELLO";
let uppercaseText = text.toUpperCase();
let lowercaseText = text.toLowerCase();
console.log(uppercaseText);
console.log(lowercaseText);
//substring , string comparison, string template
//will give us the subsring of our text
let subString = uppercaseText.substring(0, 10);
console.log(subString);
//string comparison equals
let answer = uppercaseText === lowercaseText;
console.log(answer);
//boolean and bigint data types
