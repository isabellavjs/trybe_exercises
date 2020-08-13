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
assert.strictEqual(typeof myRemove, 'function', 'MyRemove nao e uma funcao');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 4],'arr nao contem o parametro item');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 3, 4],'arr e newArr sao diferentes');
//Terceiro item aqui
const newList = [5, 6, 7, 8];
//myRemove(newList,8);
assert.deepStrictEqual(myRemove(newList,8),[5, 6, 7], 'arr nao contem o parametro item');
assert.deepStrictEqual(myRemove([1,2,3,4],5),[1, 2, 3, 4], 'arr nao contem o parametro item');