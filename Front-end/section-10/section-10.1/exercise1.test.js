const sum = require('./exercise1.js');

test('sums two values', () => {
  expect(sum(4, 5)).toBe(9);
})

test('Sums of 0 + 0 = 0', () => {
  expect(sum(0, 0)).toBe(0);
})

test('throws error', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow(/parameters must be numbers/)
})