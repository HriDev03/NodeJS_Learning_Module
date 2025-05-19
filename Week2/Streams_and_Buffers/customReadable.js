const { Readable  }= require("stream") ;

class CustomReadableStream extends Readable{
    // custom constructor 
    constructor(options){
        super();
        this.maxNum=10;
        this.generatedNumbers=0;
    }
    _read(){
        if(this.generatedNumbers>=this.maxNum){
            this.push(null);
            // we have printed out the 10 random numbers so pause the reading 
        }else{
            const randomNumber=Math.floor(Math.random()*1000);
            const buffer=Buffer.from(randomNumber.toString(),"utf-8") //temporary memory
            this.push(buffer)
            this.generatedNumbers+=1;
        }
    }
} 

const randomNumberStream=new CustomReadableStream();

randomNumberStream.on("data",(chunks)=>{
    console.log("Received "+chunks.toString());
})
randomNumberStream.on("end",(chunks)=>{
    console.log("Data Read Sucessfully ");
})


