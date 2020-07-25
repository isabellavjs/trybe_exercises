//Função para descobrir qual valor mais se repete
function numeroMaisRepetidos(numeros) {
let numeroRepetido = 0; //
let vezesRepetidas = 0; //Contador para as vezes repetidas
let indexNumeroRepetido = 0; //Variável para guardar o indice do numero mais repetido.

//loop externo: percorre todos os valores em números.
for (let index in numeros) {
    //Armazena os valores em cada indice do array numero.
    let verificaNumero = numeros[index];

    //Loop interno: verifica se há números repetidos, e acrescenta +1 no contador se for repetido.
    for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
            vezesRepetidas += 1;
        }
    }
    //Verificar qual é o número que mais se repete, e armazenálo em indexNumeroRepetido.
    if (vezesRepetidas > numeroRepetido) {
        vezesRepetidas = numeroRepetido;
        indexNumeroRepetido = index;
    }
    vezesRepetidas = 0
}

    return numeros[indexNumeroRepetido];
}
 let numeros = [2, 3, 5, 5, 5];
 console.log(numeroMaisRepetidos(numeros));