//Variáveis utilizadas.
let numbers = [5, 9, 3, 19, 70000, 8, 100, 2, 35, 270];

//Algoritmo bubble sort
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
       let position = numbers[i];
    
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }
  console.log(numbers);