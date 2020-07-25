//Função que retorna o nome com a maior quantidade de caracteres
function maiorCaracteres(nomes) {
let longestName = [];


//Percorrer cada nome no array nomes
for (index in nomes) {

    //Checar qual é o nome com maior qtde de strings
    if (longestName.length < nomes[index].length) {
        longestName = nomes[index];
    }
}
    
    return longestName;
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Claudinelsolino'];
console.log(maiorCaracteres(nomes))