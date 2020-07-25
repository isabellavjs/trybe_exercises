//Função para retornar o somatório de todos os números entre 1 e N
function somaValoresN(n) {
    let resultadoSoma = 0;

    for (let i = 1; i <= n; i++) {
            resultadoSoma += i;
    }
return resultadoSoma;
}

console.log(somaValoresN(10));
