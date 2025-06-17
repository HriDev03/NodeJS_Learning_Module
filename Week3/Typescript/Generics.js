"use strict";
// reuseable components in TypeScript
// functions that can work with multiple datatype
// function logReturn(value : number | string |boolean):number|string|boolean{
//     console.log(value);
//     return value;
// }
// const numResult:string|number =logReturn(42);
// const strResult:string|number =logReturn("Hello Genetics , love ts");
// const booleanResults:string|number|boolean=logReturn(true)
// generics
// Type : placeholder
// generics TypeScript
//general function hai type unknown hhai , when we are calling it tabh isse bulae ge
function logReturn(value) {
    console.log(value);
    return value;
}
const numResult = logReturn(42);
// type inference , jaise koi data type aaya yeh uski tarah kaam karega
const strResult = logReturn("Hello Genetics , love ts");
const booleanResults = logReturn(true);
console.log(numResult);
console.log(strResult);
console.log(booleanResults);
//TS AND JS INLAY HINTS
