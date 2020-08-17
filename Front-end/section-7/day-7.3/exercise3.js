const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
// Task 0 - testing if myRemoveWIthoutCopy is a function
assert.strictEqual(typeof myRemoveWithoutCopy,'function');
// Task 1
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 4],'Resultado inesperado');
// Task 2
assert.notDeepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Resultado inesperado');
// Task 3
const newArray = [5, 6, 7, 8];
assert.deepStrictEqual(myRemoveWithoutCopy(newArray,5),[6,7,8],'Resultado inesperado');
// Task 4
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Resultado inesperado');