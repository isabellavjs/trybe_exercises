const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let counter = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      counter += 1;
      characters[i] = counter;
      results.push(characters[i]);
    } else {
      results.push(characters[i]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const output = removeVowels(parameter);

console.log(removeVowels(parameter));

// Tests
assert.deepStrictEqual(output, result);