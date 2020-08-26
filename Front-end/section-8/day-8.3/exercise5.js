    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

const getA = (acc, letter) => {
  const splittedWords = letter.split('');
  const numberOfLetters = splittedWords
  .filter(letter => letter.toLowerCase() === 'a').length;
  return acc + numberOfLetters;
}

function containsA() {
  return names.reduce(getA, 0);
}
console.log(containsA(names));

assert.deepEqual(containsA(), 20);