//Função que retorna o índice do menor valor
function menorValor(numeros) {
    let indiceMenorValor = 0;

    //Percorrer os indices de numeros
    for (let indice in numeros) {

        //Encontrar em qual indice está o menor valor
        if (numeros[indiceMenorValor] > numeros[indice]) {
            indiceMenorValor = indice;
        }
    }
//Retornar o indice do menor valor de numeros
return indiceMenorValor;
}

let numeros = [2, 4, 6, -7, 10, 0, -3];
console.log(menorValor(numeros));
