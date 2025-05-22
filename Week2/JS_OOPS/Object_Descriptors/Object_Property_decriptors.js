// // we want to costomise our properties in such a way that no one can alter it, list them or delete them
// // some object property
// // Object.defineProperties()

// //OBEJCT PROPERTY IS OF TWO TYPES
// //two types of property descriptors :
// //  1)Data Descriptor : value , is this writeable, is this enumerable , if it is configurable on not
// // 2) Acessor Descriptor : consists of setters , if a setter is defined the it is editable  No Writable property, searchable/hidden,

// // SOME ESSENTIAL OBJECT PROPERTIES
// /*  
//     1) Object.defineProperty(): Used to define a new property and change an existing one
//     Object.defineProperties() : Used to define multiple properties and modify them in a single 
   
//     2)Object.getOwnPropertyDescriptor() : this is used to fetch an Object properties and attributes or configuration
//     will only get the descrption of objects own property not of the prototype chain
   
//     3) Object.getOwnPropertyDescriptors():used to fetch all the  object property configurations not the ones in the prototype chain
   
//     4) Object.keys: IT is used to get all the enumurable/iteratable property names of  an object
// */


// function dataDescriptor() {
//     const user = {};

//     // 1) First way by normally adding 
//     user.name = 'Web Developer'; // adding 

//     // 2) Object.defineProperty() to add properties with descriptors
//     Object.defineProperty(user, 'email', {
//         value: 'webDev@gmial.org',

//     });

//     // Now we know that _id is writable and configurable is FALSE
//     Object.defineProperty(user, '_id', {
//         value: Symbol(),
//         writable: false,
//         configurable: false
//     });

//     console.log("Object's own property descriptors:");
//     console.log(Object.getOwnPropertyDescriptors(user));
//     try {
//         user._id = Symbol(); 
//     } catch (err) {
//         console.log(err);
//     }

//     try {
//         delete user._id; 
//     } catch (err) {
//         console.log(err);
//     }

    
//     console.log(Object.keys(user)); 

//     Object.defineProperty(user, 'password', {
//         writable: true,
//         enumerable: true,
//         configurable: true,
//         value: 'your-password-here'
//     });

//     console.log(Object.getOwnPropertyDescriptors(user)); // Should now include 'password'
// }


// dataDescriptor();


// IN THESE ERRORS ARE SILENT BUT WHEN WE TRY TO REDEFINE WHEN CONFIGURABLE IS FALSE , IT WILL THROW US AN ERROR


const chai={
    name: 'ginger chai',
    price: 250,
    isAvailable: true
};
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
// This will output the descriptor for the 'name' property.
