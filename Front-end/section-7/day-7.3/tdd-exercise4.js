const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (arrayWords, findString) => {
  let expected = -1;
  for (let index = 0; index < arrayWords.length; index += 1) {
    if (arrayWords[index] === findString) {
      expected = Number(index);
    } 
  }
  return expected;
}
console.log(findTheNeedle(['plant', 'shelf', 'arrow', 'bird'], 'bird'));


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);