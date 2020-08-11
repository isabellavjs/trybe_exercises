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