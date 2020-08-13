const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// Task 0: test if myFizzBuzz is a function
assert.strictEqual(typeof myFizzBuzz, 'function', 'myFizzBuzz nao e uma funcao');
// Task 1:
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'num nao e divisivel por 3 e 5.');
// Task 2:
assert.strictEqual(myFizzBuzz(9), 'fizz', 'num nao e divisivel por 3.');
// Task 3: 
assert.strictEqual(myFizzBuzz(55), 'buzz', 'num nao e divisivel por 5');
// Task 4:
assert.strictEqual(myFizzBuzz(13), 13, 'num nao e divisivel por 3 ou 5');
// Task 5:
assert.strictEqual(myFizzBuzz('5'), false, 'num nao e um numero');