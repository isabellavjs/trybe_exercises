const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// Task 0: testing if myRemove is a function
assert.strictEqual(typeof myRemove, 'function', 'MyRemove nao e uma funcao');
// Task 1
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 4],'arr nao contem o parametro item');
// Task 2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 3, 4],'arr e newArr sao diferentes');
// Task 3
const newList = [5, 6, 7, 8];
//myRemove(newList,8);
// Task 4
assert.deepStrictEqual(myRemove(newList,8),[5, 6, 7], 'arr nao contem o parametro item');
assert.deepStrictEqual(myRemove([1,2,3,4],5),[1, 2, 3, 4], 'arr nao contem o parametro item');