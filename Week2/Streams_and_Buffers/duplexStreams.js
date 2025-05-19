// both readable and writeable interfaces

const {Duplex} =require("stream");

// one case of duplex is Zlib
const zlib=require("zlib");

// zlib--->transform Stream
// transform--->is a example of  a duplex stream

class CustomDuplex extends Duplex{
    constructor(){
        super();
    }

    // can implement both read and write method

    _read(){

    }

    _write(){

    }
}

const duplexStream=new CustomDuplex();
console.log(duplexStream); // both having a readAble state and writeAble state