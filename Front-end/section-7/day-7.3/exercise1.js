const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui - Tarefa 1: testar a funcao soma
assert.strictEqual(sum(4,5),9, 'Quatro mais cinco e 9');
assert.strictEqual(sum(0,0),0,'A soma 0 + 0 e 0');
assert.strictEqual(sum(4,"5"),9,'A soma de quatro e cinco e nove');
