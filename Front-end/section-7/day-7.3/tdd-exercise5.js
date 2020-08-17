const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];
  for (const person in people) {
    let substring = `Hello ${people[person]}`;
    greeting.push(substring);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

console.log(greetPeople(parameter));

// Tests
assert.deepStrictEqual(output, result);