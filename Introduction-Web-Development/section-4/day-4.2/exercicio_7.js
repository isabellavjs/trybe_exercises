//Variáveis utilizadas.
let numbers = [5, 9, 3, 19, 70000, -80];
let menorNumero = [];

//Percorrer cada elemento do array, e fazer comparações com cada valor em cada indice.
for (let indice = 0; indice < numbers.length; indice++) {
    if (indice === 0) {
    menorNumero.push(numbers[indice]);
    } else {
        if (numbers[indice] < menorNumero) {
            menorNumero = numbers[indice];
        }
    }
}
console.log(menorNumero);