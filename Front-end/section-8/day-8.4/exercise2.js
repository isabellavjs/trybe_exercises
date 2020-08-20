const assert = require('assert')

function sum(...numbers) {
  let sumNumbers = 0;
  for (let index of numbers) {
    sumNumbers += index;
  }
  return sumNumbers;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)