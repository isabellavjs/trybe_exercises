const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (arrayStrings) => {
  const arrayNumofLetters = [];
  for (let index = 0; index < arrayStrings.length; index += 1) {
    let subStrings = arrayStrings[index];
    arrayNumofLetters.push(subStrings.length);
  }
  return arrayNumofLetters;
}
//console.log(wordLengths(['sun', 'potato', 'roundabout', 'pizza']));

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);