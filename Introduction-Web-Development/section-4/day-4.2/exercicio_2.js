let numbers = [5, 9, 3];
let somaArray = 0;

//Percorrer cada elemento do array, somar os valores e imprimir a soma.
for (let indice = 0; indice < numbers.length; indice++) {
    somaArray += numbers[indice]; 
}
console.log(somaArray);