"use strict";
// ek container where we can store values of same data types
// 1) using sq brackets , 2) using array constructors , 3) using Array.of method
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums1 = new Array(1, 2, 3, 4, 5, 6);
const names = Array.of("Hridyesh", "Sharma", "Dev");
// accessing elements using square rackets
console.log(names[1]);
//array methods
console.log(names.length);
//Array Inbuilt methods
const fruits = ["apple", "banana", "orange", "mango"];
const newUpdatedFrunits = fruits.push("strawberry");
// agar push krr rahe ho aur agar usse ek variable mai store karke print karo , then we will get the updated length
console.log(newUpdatedFrunits);
// we will get the fruits with straberry in it
console.log(fruits);
const lastData = fruits.pop();
// we will get the last eleent
console.log(lastData);
console.log(fruits);
// if we want to add , remove from the last : PUSH / POP
// if we want to change from the front :  Unshift / Shift
// ITERATIONS IN ARRAY
//for loop
//  for in index
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//for of : values mile ga , iterating over values
for (const fruit of fruits) {
    console.log(fruit);
}
//for each
//forEach loop
fruits.forEach((currVal) => console.log(currVal));
// MAP , FILTER , REDUCE
//MAP : doubling , converting number to a strings, make each array element to uppercase , new array having square of each numbers
/*
    map will return us a new array with modified values , no data mutation
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// will get a ne array of numbers
const doubleData = numbers.map((curVal) => curVal * 2);
console.log(doubleData);
const numToStr = numbers.map((currVal) => {
    return currVal.toString();
});
console.log(numToStr);
// Filter : filtering even numbers , filtering numbers greater tan 3, 
//filter those values where length>15, given array of names where names starts with the letter A
// sometimes we want to return some filtered data
// JAHA SAB PE KUCH  KARNA HAI MAP , JAHA LIMITED CHEEZO PE KARNA HAI THEN FILTER
const numToStrr = numbers.filter((currVal) => currVal > 3);
console.log(numToStrr);
const evenNums = numbers.filter((curVal) => {
    return curVal % 2 == 0;
});
console.log(evenNums);
const names2 = [
    "Alexander",
    "Brian",
    "Catherine",
    "Anastasia",
    "Michael",
    "Aurelia Montgomery",
    "Zara",
    "Amandalynn Fitzgerald",
    "John",
    "Archibald McAllister",
    "Eva",
    "Antoinette Summers",
    "Aaliyah",
    "Alessandra",
    "Abraham Lincoln",
    "Averill Anderson",
];
const names3 = names2.filter((currVal) => {
    return currVal.startsWith('A');
});
console.log(names3);
const lenGreater15 = names2.filter(name => name.length > 15);
console.log(lenGreater15);
//create a func calculateAvg that takes an array of numbers as a parameter and returns the average of those numbers
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// write a function called findMaxValue that takes an array of nmbers as a parameter and returns the max value in the array
