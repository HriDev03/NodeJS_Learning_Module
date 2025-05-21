

//Enumerable : we are able to access the keys of the object as Iterable
//When its true the properties shows up when we are trying to list them using Object.keys() option

//Enumerable : IF SOMETHING CAN BE LOOPED THROUGH, can a propert be iterated over?
//FALSE BY DEFAULT
const profile={}
Object.defineProperties(profile,{
    'username':{
        value:"Hri03",
        writable:false,//can not be over-written
        enumerable:true,
        configurable:true,
    },
    'name':{
        value:"Hridyesh",
        writable:true,
        enumerable:true,
        configurable:true,
    },
    'email':{
        value:"koitempemail@gmail.com",
        writable:true,
        enumerable:false,
        configurable:true,
    }
});

console.log(
    console.log("Object ki properties ki description hai yeh"),
    Object.getOwnPropertyDescriptors(profile)

);

console.log("Objects enumerable keysss", Object.keys());
console.log(...profile);

Object.defineProperties(profile,{
    //marked name confidential cut can display names
    'name':{
        enumerable:false,
    },
    'email':{
        enumerable:true,
    },
});

console.log(
    console.log("Object ki properties ki description hai yeh after altered"),
    Object.getOwnPropertyDescriptors(profile)

);
// if we want to iterate directly in object use for in
for(const key in profile){
    console.log("Object keys after changes",key);
}