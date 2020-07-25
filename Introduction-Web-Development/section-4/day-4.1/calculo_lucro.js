//Declarar as variáveis custoVenda e custoProducao
let custoVenda = 30;
let custoProducao = 45;
let lucro;

//Calculo do lucro
if (custoProducao > 0 && custoVenda > 0) {
lucro = ((custoVenda - custoProducao)*100)*0.8;
console.log(lucro);
} else console.log("Erro: valores de custo de venda e produção devem ser maiores que 0");