//Variáveis utilizadas. 
let n = 5;
let asteriscos = " * ";
let adicionaLinhas = " ";

//Criar a primeira linha.
for (let index = 0; index < n; index += 1) {
    adicionaLinhas = adicionaLinhas + asteriscos
}
//Repetir a primeira linha n vezes para imprimir o quadrado.
for (let index = 0; index < n; index += 1) {
    console.log(adicionaLinhas);
}