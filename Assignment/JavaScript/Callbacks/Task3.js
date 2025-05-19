
function importantAction(data,cb){
    setTimeout(()=>{
        console.log(data);
        cb("Welcome from function 1");
    },2000)      
}

function importantAction2(data,cb){
    setTimeout(()=>{
        console.log(data);
        cb("Welcome from function 2");
    },2000)
      
}

function importantAction3(data,cb){
    setTimeout(()=>{
        cb("Welcome from function 3 "+data);
    },2000)
      
}

importantAction("hri",(message)=>{
    console.log(message);
    importantAction2("hri2",(message2)=>{
      console.log(message2);
      importantAction3("hridyess",(mess)=>{
        console.log(mess);
      })
    })
})
  