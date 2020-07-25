//Variável que recebe a nota em %
var notaPorcentagem = 150;

if (notaPorcentagem >= 0 && notaPorcentagem <= 100) {
//Converte a nota em conceitos
    if (notaPorcentagem >= 90) {
    console.log("Nota A");
    } else if (notaPorcentagem >= 80) {
    console.log("Nota B");
    } else if (notaPorcentagem >= 70) {
    console.log("Nota C");
    } else if (notaPorcentagem >= 60) {
    console.log("Nota D");
    } else if (notaPorcentagem >= 50) {
    console.log("Nota E");
    } else {
    console.log("Nota F")
    }
} else {
    console.log("Erro: a nota informada é menor que 0 ou maior que 100.")
}