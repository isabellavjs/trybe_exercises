//Variáveis utilizadas.
let base = 5;
let asteriscos = " * ";

//Imprimir o triângulo de asteriscos.
for (let indice = base; indice >= 0; indice--) {
    if (indice <= base && indice >= 0) {
    console.log(asteriscos.repeat(base - indice));
    }
}