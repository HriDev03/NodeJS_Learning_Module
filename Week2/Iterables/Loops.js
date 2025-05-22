//Normal LOOPS

//For Loop
const fruits=['banana','apple','mango','grapes']

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log('---------------------------------------------------------------------');

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
console.log('---------------------------------------------------------------------');
// Objects are not iterables so for them we use for in loop
const preson={
    firstName:"Hridyesh",
    lastName:"Sharma",
    age:21,
    city:"Hyderabad"
}
for(const key in preson){
    console.log(key);
}

// -Arrays and their methods (map, filter, reduce, forEach
// -JSON parsing and stringifying
// -Arrow functions
// -Modules (import/export)
 