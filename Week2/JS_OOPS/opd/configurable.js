// CONFIGURABLE : it is a type of locking mechanism , 
// if it is set to false then the property cant be deleted,
// other attributes of the property cant be changed except writeable, if writeable is true then value can be updated and can be set to false;
// SIRF WRITEABLE TRUE->FALSE ALLOWED
const device={}
Object.defineProperties(device,{
    'name':{
        value:'My PC',
        writable:true,
        enumerable:true,
        configurable:true,
    },
    'model':{
        value:'i7 12th gen P',
        writable:true,
        enumerable:false,
        configurable:true,
    },
    'serialNumber':{
        value:'KUCH_BHI_LIKH_LOO',
        writable:false,
        enumerable:true,
        configurable:false,
    },

});


console.log(
    'Object property descriptor ',
    Object.getOwnPropertyDescriptors(device)
);

//iterating through the profiles that could be iterated
console.log(Object.keys(device));

try{
    Object.defineProperty(device,'serialNumber',{
        enumerable:false,
    });
}catch(err){
    console.log(err);
}

