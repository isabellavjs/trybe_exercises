//Variáveis utilizadas.
let base = 5;
let asteriscos = "*";
let espacos = " ";

//Imprimir o triângulo de asteriscos invertido.
for (let indice = base; indice >= 0; indice--) {

    for ( let j = 0; j < indice; j++) {

        if (j < indice && indice >= 0) {
            
            console.log(asteriscos.repeat(base)+espacos.repeat(base));
        
        }
    }
}