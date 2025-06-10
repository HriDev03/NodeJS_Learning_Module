const compileCode=require("./error.jdk")
test('compiling code throws an error', () => {
  // Wrap the function call in a function to test throwing
  expect(() => compileCode()).toThrow('wrong JDK');
});
