
// WRITABLE : is used to set a property as if we can ReWrite it or not, if it is true then we can change it , by default it is false
const fruit={}
// fruit object mai add krr do aur value set krr do
Object.defineProperties(fruit,{

    "name":{
        value:"APPLE",
        writable:true,
        enumerable:true,
        configurable:true,
    },

    'color':{
        value:'Red',
        writable:true,
        enumerable:true,
        configurable:true,
    },

    'type':{
        value:'fruit',
        writable:false,
        enumerable:true,
        configurable:true,
    }
})

console.log('Object defined',fruit);

console.log(
    'Object property descriptors',
    Object.getOwnPropertyDescriptors(false)
);

fruit.name="Mango"
fruit.color="Yellow"

// trying to assign a writeable
try{
    fruit.type="KUCH_BHI"
}catch(err){
    console.log(err);
}

fruit.name="Almond"
fruit.color="Brown"

Object.defineProperty(fruit,"type",{
    value:"DRYFRUIT HAI BHAI",
    writable:"True"
})
console.log(Object.getOwnPropertyDescriptors());