const cloneArray=require('./cloneArray')

test('properly clones our given array', () => {
    const array=[1,2,3]
    // we will failed as it shoul be having deep equality, then use toStrictEqual
    //expect(cloneArray(array)).toBe(array) refrences by different memory value
    expect(cloneArray(array)).toEqual(array)
    // to check if it created a clone and not copying the same array
    expect(cloneArray(array)).not.toBe(array)
});
