//steps to test
//1) import the function
const sub = require("./subtract")
test('properly subtractss two numbers',()=>{
    expect(//it expects the function that we are passing to do something related to other function
        sub(2,1)
    ).toBe(1)
    //to be , not to be, to equal,to null
});
