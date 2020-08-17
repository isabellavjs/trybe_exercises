const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui - Tarefa 1: testar a funcao soma
// Task 0: testing if sum is a function
assert.strictEqual(typeof sum, 'function', 'sum nao e uma funcao')
// Task 1
assert.strictEqual(sum(4,5),9, 'Quatro mais cinco e 9');
// Task 2
assert.strictEqual(sum(0,0),0,'A soma 0 + 0 e 0');
//Task 3
assert.throws(() => {
  sum(4,'5');
})
// Task 4
assert.throws(() => {
  sum(4,'5')
}, /^Error: parameters must be numbers$/);
console.log(sum(4,5));