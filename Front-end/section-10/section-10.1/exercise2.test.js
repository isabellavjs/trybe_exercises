const myRemove = require('./exercise2');

test('Expected to be equal', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})

test('Expected to be equal', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
})

const newArray = [5, 6, 7, 8];
test('no changes', () => {
  expect(myRemove(newArray, 8)).toEqual([5, 6, 7]);
})

test('Expected to be equal', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})