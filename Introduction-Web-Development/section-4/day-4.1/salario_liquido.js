//Variáveis para calcular o salário líquido
let salarioBruto = 2500;
let aliquotaInss = 0;
let aliquotaIr = 0;
let salarioLiquido;
let salarioBase

//Calculo INSS
if (salarioBruto > 5189.82) {
    aliquotaInss = 570.88;
} else if (salarioBruto >= 2594.93) {
    aliquotaInss = salarioLiquido*0.11;
} else if (salarioBruto >= 1556.95) {
    aliquotaInss = salarioBruto*0.09;
} else if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto*0.08;
}
salarioBase = salarioBruto - aliquotaIr;

//Calculo IR
if (salarioBase > 4664.68) {
    aliquotaIr = salarioBase*0.275 - 869.36;
} else if (salarioBase >= 3751.06) {
    aliquotaIr = salarioBase*0.225 - 636.13;
} else if (salarioBase >= 2826.66) {
    aliquotaIr = salarioBase*0.15 - 354.80;
} else if (salarioBase >=1903.99) {
    aliquotaIr = salarioBase*0.075 - 142.80;
} else if (salarioBase < 1903.98) {
    aliquotaIr = 0;
}

//Resultado final
salarioLiquido = salarioBase - aliquotaIr;
console.log(salarioLiquido)