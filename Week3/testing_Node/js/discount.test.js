
const calculateDiscount = require('./discount');

test('calculates discount', ()=>{
    expect(calculateDiscount(100, 10)).toBe('90.00');
    expect(calculateDiscount(50, 50)).toBe('25.00');
});

test('if discount 0 no change', () => {
    expect(calculateDiscount(100, 0)).toBe('100.00');
});

test('error if price negative', () => {
    expect(() => calculateDiscount(-10, 10)).toThrow('price and discount negative nahi hota');
});

test('throws error if discount is negative', () => {
    expect(() => calculateDiscount(100, -10)).toThrow('price and discount negative nahi hota');
});

test('throws error if discount exceeds 100', () => {
    expect(() => calculateDiscount(100, 150)).toThrow('free mai lega kya');
});