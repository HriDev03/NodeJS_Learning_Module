"use strict";
// function overloading with generics
// function add(a:number,b:number):number;
// function add(a:string,b:string):string;
// function add(a:any,b:any):any{
//     return a+b;
// };
function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
add(5, "Hri", true);
add("hello", 5, false);
add("hello", 5, true);
// console.log(ress1);
// console.log(ress2);
//how to work wit multiple data types with generics
