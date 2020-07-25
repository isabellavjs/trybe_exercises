
//Função retorna o maior valor do array numeros 
function maiorValor(numeros) {
//Declara a varável indiceMaiorNumero, que armazena o índice do maior valor de numeros
    let indiceMaiorNumero = 0;
    
//Percorrer todas as posições de números
    for (let index in numeros) {
        
        //Definir qual é o indice do maior valor do array numeros.
        if (numeros[indiceMaiorNumero] < numeros[index]) {
            indiceMaiorNumero = index;
        } 
    }

    return indiceMaiorNumero;
}

let numeros = [2, 40, 6, 7, 10, 0, -3];
console.log(maiorValor(numeros));