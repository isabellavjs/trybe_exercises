    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

const getA = (acc, letter) => {
  const splittedWords = letter.split('');
  (splittedWords.includes('a') || splittedWords.includes('A') ? acc : letter);
}

function containsA() {
  return names.reduce(getA, 0);
}
console.log(containsA(names));

assert.deepEqual(containsA(), 20);