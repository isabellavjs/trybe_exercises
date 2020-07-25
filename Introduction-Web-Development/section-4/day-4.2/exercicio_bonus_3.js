//Variáveis utilizadas.
let numbers = [5, 9, 2, 3];
let multiplicacaoNumbers = [];

//Loop para multiplicar a posição numbers[i] e numbers[j].
for (let i = 0; i < numbers.length; i++) {
   
        if (numbers[i+1]) {
            let resultadoMultiplicacao = numbers[i]*numbers[i + 1];
            multiplicacaoNumbers.push(resultadoMultiplicacao);        
        } else {
            let resultadoMultiplicacao = 2*numbers[i];
            multiplicacaoNumbers.push(resultadoMultiplicacao);
        }
    
}

console.log(multiplicacaoNumbers);

  