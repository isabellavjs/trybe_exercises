//Options to select the state
const estados = document.getElementById('estado');
const opcoesEstados = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let value = 1;
//Create the options to select
function createListState() {
    for (let index = 0; index < opcoesEstados.length; index += 1) {
        let createOptions = document.createElement('option');
        createOptions.value = value;
        createOptions.innerHTML = opcoesEstados[index];
        estados.appendChild(createOptions);
    }
}
createListState();