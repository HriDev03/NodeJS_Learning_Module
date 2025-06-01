//Normal LOOPS
/*
const fruits=['banana','apple','mango','grapes']

//For Loop
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

console.log('---------------------------------------------------------------------');


//inki help se arrays and objects pe iterate krr sakte hai
//For Of: Loop karega on iterable onbjects , arrays,string,Map,Set

for(let fruit of fruits){
    console.log(fruit);
}

console.log('---------------------------------------------------------------------');
console.log("For OF ON Strings");

const user="IronMan"
for(let letter of user){
    console.log(letter);
}
*/
// FOR OFF ka use karke Arrays and iterables pe loop krr sakte hai, arrays, strings,node list
// cant be used on objects


//              FOR IN 
/*
//FOR objects : These are not iterables so for them we use forIn Loop

console.log('---------------------------------------------------------------------');

// Objects are not iterables so for them we use for in loop

console.log("Iterating on objects");

const person={
    firstName:"Hridyesh",
    lastName:"Sharma",
    age:21,
    city:"Hyderabad"
}


for(const key in person){
    // Bracket Notation
    console.log(`${key} : ${person[key]}`);
}
console.log('---------------------------------------------------------------------');


//OBJECT.keys() method
const keyss=Object.keys(person);

//here it will return the index here
// for(const key in keyss){
//     console.log(key);
// }

//here it will return the index here
for(const key of keyss){
    console.log(key);
}


// Obect.values()
const personVlas=Object.values(person)
console.log(personVlas);

//Object.entries

// Will be returned as 2d array
const personData=Object.entries(person)
console.log(personData);

*/

// FOR EACH

//for each array method loop ki tarah hi hota hai 

//iski help se we cann access all the array elements

// it takes a callback function
/*

// jitne bhi elements hai hamare array ke andar utni baar call hoga yeh callback function

fruits.forEach((fruit)=>{
    console.log(fruit);     
})

fruits.forEach(function(fruit){
    console.log(fruit);     
})
//for each kuch return nahi kartaa

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//map , filter, reduce return karte hai 

//MAP will perform operations on our given array and will return a new mdified array

const months=["January","February","March","April","May","June","December"]
const modifiedMonths=months.map((month,index)=>{
    return [index + 1, month.toUpperCase()];
})
console.log(modifiedMonths);
*/

//  FILTER METHOD

//VALUES KO NIKAL KE FILETER KRR KE NAYA ARRAY RETURN KARTA HAI

// Iska result hoga joh ya toh hamara bada waala array uske equal hoga

// yah toh ussi array ka part hoga

/*
    const filteredMonths=months.filter ((month,index,array)=>{
    console.log(index+1,month);
    //return true/month.toUpperCase()--->Truthy Values
    })
*/
/*

//to show only those months jiknki length 5 or less

const filteredMonths=months.filter((month,index,array)=>{
    return month.length<=5
})

console.log(filteredMonths);

// TO see months who ave m in their name

const filetrMonthswithM=months.filter((months)=>{
    let modified=months.toLowerCase();
    return modified.includes('m');
})

console.log(filetrMonthswithM);


const students=[
    {
     name:"Akash",
     age:20  
    },
    {
     name:"Babbar",
     age:17
    },
    {
     name:"Amit",
     age:24
    },
    {
     name:"Hridy",
     age:19
    },
    {
     name:"dhej",
     age:16
    },
    {
     name:"Bala",
     age:18
    },
    {
     name:"Ara",
     age:21
}];
    
// ARRAY METHOD CHAINING

const adultStudents=students.filter((students)=>{
    return students.age>=18
}).map((student)=>{
    return student.name
}).filter((student)=>{
    //first name capital and age>=18
    return student.includes('A')
})
console.log(adultStudents);

//reduce method in JS
//reduce : array mai jo values hai usse ek value mao reduc krr dena

const nums=[1,1,2,1,1,1,1]
nums.reduce((acc,curr)=>{
   return acc+curr
},10)

/*initial value*/

// accumulator:value ko kathaa karne waala
// */
//Practice of Nested Ojects

//Q1)  BASIC NESTED OBJECTS
/*
    const personn = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    }
    };

    // access city name
    console.log(personn.address.city);
    //changing zip code
    personn.address.zip="180002"
    console.log(personn.address.zip);

    const personn = {
    name: "John",
    hobbies: ["reading", "gaming", "hiking"],
    address: {
        city: "New York",
        zip: "10001"
    }
};
*/

//Q2 BIT COMPLEX array hai object ike andar
/*
const personn = {
  name: "John",
  hobbies: ["reading", "gaming", "hiking"],
  address: {
    city: "New York",
    zip: "10001"
  }
};

//getting all hobbies
console.log(personn.hobbies);
//if person has gaming as a hobbie
console.log(personn.hobbies.includes("gaminng"));
*/
/*
const personn = {
  name: "John",
  hobbies: [
    { name: "reading", type: "indoor" },
    { name: "gaming", type: "indoor" },
    { name: "hiking", type: "outdoor" },
    { name: "TT", type: "indoor" },
    { name: "Pool", type: "indoor" },
  ],
  address: {
    city: "New York",
    zip: "10001"
  }
};

//getting all hobbie names
let personHobby=personn.hobbies.map((hobby)=>{
    return hobby.name
})
console.log(personHobby);

//get indoor hobbies
let indoorss=personn.hobbies.filter((hobby)=>{
    return hobby.type==="indoor" // voh hobbie return karo jiska type indoor hai
})
console.log(indoorss);

*/

//Nested Library Objects

//.flatMap() :----> used for arrays inside an array and want to extract items

// const library = {
//   name: "Central Library",
//   location: {
//     city: "Metropolis",
//     address: "123 Library St."
//   },
//   sections: [
//     {
//       name: "Fiction",
//       books: [
//         { 
//           title: "The Great Gatsby", 
//           author: { firstName: "F. Scott", lastName: "Fitzgerald" }, 
//           year: 1925, 
//           genres: ["Novel", "Historical"],
//           copies: [
//             { id: 1, status: "available" },
//             { id: 2, status: "borrowed" }
//           ]
//         },
//         { 
//           title: "1984", 
//           author: { firstName: "George", lastName: "Orwell" }, 
//           year: 1949, 
//           genres: ["Dystopian", "Science Fiction"],
//           copies: [
//             { id: 3, status: "available" },
//             { id: 4, status: "available" }
//           ]
//         }
//       ]
//     },
//     {
//       name: "Non-Fiction",
//       books: [
//         { 
//           title: "Sapiens", 
//           author: { firstName: "Yuval Noah", lastName: "Harari" }, 
//           year: 2011, 
//           genres: ["History", "Anthropology"],
//           copies: [
//             { id: 5, status: "borrowed" }
//           ]
//         }
//       ]
//     }
//   ]
// };


// //get all book titles
// console.log('\n');
// console.log('\n');
// console.log("ALL BOOKS TITLE");
// const allBookTitles= library.sections.flatMap((sec)=>{
//     return sec.books
// }).map((books)=>{
//     return books.title
// })
// console.log(allBookTitles);

// //books published before 1950
// console.log('\n');
// console.log('\n');
// console.log("books before 1950");

// const booksBefore1950=library.sections.flatMap((sec)=>{
//     return sec.books
// }).filter((book)=>{
//    return  book.year<1950
// })
// console.log(booksBefore1950);

// //list author names of all books in fiction section
// console.log('\n');
// console.log('\n');
// console.log("Author with fiction section");
// let ficAuht=library.sections.find((sec)=>{
//     return(sec.name==="Fiction")
// })
// .books.map((book)=>{
//     console.log(`${book.author.firstName} : ${book.title}`);
// }) 

// const arr=[5,1,3,2,6]

// //user to transform an array
// const output=arr.map((e)=>{
//   return e*2;
// })

// //run this function and will create a new array
// console.log(output);

// for binary .toString(2)

// .filter()-------> Used to filter my array according to some condition

const arr1=[5,1,3,2,6];

//filter
const outputtt=arr1.filter((num)=>{
  return num>2;
})

console.log(outputtt);

// REDUCE : it is used when we need to take all the elements of an array and reduce it into a single value

//sum or max

//refuce has 2 parameters 1) a function and 2) A default value

// curr represents the current value
// acc keeps on accumulating the value

// const myoutput=arr1.reduce(function(acc,curr){
//   acc=acc+curr
// },0);


const users=[
  {firstName:"Hridyesh",lastName:"sHARMA",age:21},
  {firstName:"Hri",lastName:"s",age:22},
  {firstName:"Hridy",lastName:"ARMA",age:23},
  {firstName:"Aash",lastName:"RMA",age:27},
]
//chaining ho rahi hai
const output= users.filter((x)=>x.age>21).map((x)=>{console.log(x.firstName);})
console.log(output);

let arr=[1,2,[3,4,[5,10],6,7,]]

console.log(arr.flat(2).map((el)=>{
  return el*2;
}));