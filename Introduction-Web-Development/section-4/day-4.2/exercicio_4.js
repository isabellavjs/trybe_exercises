//Variáveis utilizadas.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;
let mediaArray = 0;

//Percorrer cada elemento do array, calcular a media e o resultado.
for (let indice = 0; indice < numbers.length; indice++) {
    mediaArray = (somaArray += numbers[indice])/numbers.length
}
console.log(mediaArray);

//Retornar se o valor é maior que 20
if (mediaArray > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}


