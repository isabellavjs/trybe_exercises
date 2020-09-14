const myFizzBuzz = require('./exercise4');

test('Expected to be equal to "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toEqual('fizzbuzz');
})

test('Expected to be equal to "fizz"', () => {
  expect(myFizzBuzz(9)).toEqual('fizz');
})

test('Expected to be equal to "buzz"', () => {
  expect(myFizzBuzz(10)).toEqual('buzz');
})

test('Expected to be equal to 13', () => {
  expect(myFizzBuzz(13)).toEqual(13);
})

test('Expected to be false', () => {
  expect(myFizzBuzz('15')).toBeFalsy();
})