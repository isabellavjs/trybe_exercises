//Variáveis utilizadas.
let numbers = [5, 9, 3, 19, 70000, 8, 100, 2, 35, 270];
let maiorNumero = [];

//Percorrer cada elemento do array, e fazer comparações com cada valor em cada indice.
for (let indice = 0; indice < numbers.length; indice++) {
    if (indice === 0) {
    maiorNumero.push(numbers[indice]);
    } else {
        if (numbers[indice] > maiorNumero) {
            maiorNumero = numbers[indice];
        }
    }
}
console.log(maiorNumero);
