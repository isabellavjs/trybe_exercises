//Digite o nome da peça
let pecaXadrez = "dama";

//Movimentos possíveis para as peças de xadrez
let movimentoRei = "Qualquer direção; apenas casas adjacentes."
let movimentoRainha = "Qualquer direção; qualquer casa livre."
let movimentoTorre = "Em linha reta (vertical e horizontal); quantas casas quiser."
let movimentoBispo = "Na diagonal."
let movimentoCavalo = "Movimento em L (duas casas na horizontal, uma na vertical)."
let movimentoPeão = "Apenas uma casa para frente."

//Retorna o movimento das peças
if (pecaXadrez === "rei") {
    console.log(movimentoRei);
} else if (pecaXadrez === "rainha") {
    console.log(movimentoRainha);
} else if (pecaXadrez === "torre") {
    console.log(movimentoTorre);
} else if (pecaXadrez === "bispo") {
    console.log(movimentoBispo);
} else if (pecaXadrez === "cavalo") {
    console.log(movimentoCavalo);
} else if (pecaXadrez === "peão") {
    console.log(movimentoPeão);
} else {
    console.log("Peça de xadrez não reconhecida")
}
