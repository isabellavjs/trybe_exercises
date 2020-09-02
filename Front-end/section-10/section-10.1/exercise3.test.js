const myRemoveWithoutCopy = require('./exercise3');

test('Expect to be equal', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})

test('No changes', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
})

const newArray = [5, 6, 7, 8];
test('Expect to be equal', () => {
  expect(myRemoveWithoutCopy(newArray, 8)).toEqual([5, 6, 7]);
})

test('Expect to be equal', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})
