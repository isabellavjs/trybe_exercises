//Variáveis utilizadas.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];

//Percorrer cada elemento do array, para checar se ele é impar. Se for ímpar, adicioná-lo na variavel impares.
for (let indice = 0; indice < numbers.length; indice++) {
    if (numbers[indice]%2 != 0) {
        impares.push(numbers[indice]);
    }
}

//Imprimir a quantidade de números ímpares
if (impares.length != 0) {
   console.log(impares.length); 
} else {
    console.log("Não há ímpares");
}
