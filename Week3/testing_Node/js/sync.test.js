const multiply=require("./sync.testing")
test('multiply two numbers', () => {
    //pehle yeh chalega
  expect(multiply(2, 3)).toBe(6);
  //firr yeh chalega
  expect(multiply(-1, 5)).toBe(-5);
});
