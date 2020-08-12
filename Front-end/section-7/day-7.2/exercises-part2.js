const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Task 1: Add the morning classes to lesson2
const addMorning = (object,newKey,newInput) => {
  object[newKey] = newInput;
  return object;
}

console.log(addMorning(lesson2,'turno','manha'));

//Task 2: list the keys of an object

const listKeys = (object) => {
  let arrayKeys = Object.keys(object);
  return arrayKeys;
}

console.log(listKeys(lesson1));

//Task 3: show the size of an object
const objectSize = (object) => {
  let numberOfKeys = Object.keys(object);
  return `The object has ${numberOfKeys.length} properties`
}
console.log(objectSize(lesson3));

//Task 4: List all values of an object
const objectValues = (object) => {
  let arrayValues = Object.values(object);
  return arrayValues;
}
console.log(objectValues(lesson3));

//Task 5: create an object with allLessons
const allLessons = {};
Object.assign(allLessons,{lesson1},{lesson2},{lesson3});
console.log(allLessons);

//Task 6: Return the total number in the classes
const numberOfStudents = (object) => {
  let totalStudents = 0;
  let allValues = Object.values(object);
  for (let index in allValues) {
    totalStudents += allValues[index].numeroEstudantes;
  }
  return totalStudents;
}
console.log(numberOfStudents(allLessons));

//Task 7: Return the key value to a certain position
const valuePosition = (object,position) => {
  let valuesObject = Object.values(object);
  return valuesObject[position]; 
}
console.log(valuePosition(lesson1,0));

//Task 8: Verify if the pair keys/value exist
const VerifyPair = (object, keyValue, inputValue) => {
  let checkEntries = false;
  for (let index = 0; index < Object.keys(object).length; index += 1) {
    if (Object.keys(object)[index] == keyValue && Object.values(object)[index] == inputValue) {
      checkEntries = true;
    }
  }
  return checkEntries;
}
console.log(VerifyPair(lesson3,'turno','noite'));