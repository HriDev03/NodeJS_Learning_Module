//steps to test
//1) import the function
const sum = require("./sum")
test('properly adds two numbers',()=>{
    expect(//it expects the function that we are passing to do something related to other function
        sum(1,2)
    ).toBe(3)
    //to be , not to be, to equal,to null
});
