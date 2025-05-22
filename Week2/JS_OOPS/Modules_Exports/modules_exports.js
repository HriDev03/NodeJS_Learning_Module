/* 
    two types of modules
    ------------------------>
    1) Common js modules: we can use them ek se zyada export import krr sakte hai
    
    2) ES6 Modules : directly write exports infront of function , if default dont have to destructure

    syntax:
    and import by import defaultfunc,{func1,func2} from "./file.js"

*/

/*
    const hello=require("./module1")
    const {hello,ahello} = require("./module1")

    hello.ahello("Hri")
    hello.ahello("Hridy")
    hello.ahello("Hridyesh")
    hello.hello();
*/

//agar 50 logo ko hello karu toh ek baar mai kaise use karu
//in the base leve thid module 1 is an object so it can be destuctured
//const {hello,ahello} =require("./module1")//common js

//we dont have tto destructure will be passed as a function
import hrii, {hello,ahello} from "./module2.js"

ahello("Hri")
ahello("Hridy")
ahello("Hridyesh")
hello();
hrii();