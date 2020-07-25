let numbers = [5, 9];
let somaArray = 0;
let mediaArray = 0;

//Percorrer cada elemento do array, calcular a media e o resultado.
for (let indice = 0; indice < numbers.length; indice++) {
    mediaArray = (somaArray += numbers[indice])/numbers.length
}
console.log(mediaArray);