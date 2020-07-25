//Função para verificar palídromo
function verificarPalindromo(palavra) {
    //Cria um arrayLetras que contém o valor de palavra armazenado.
    let arrayLetras = palavra.split("");
   let ePalindromo = true

   //Loop que percorre cada letra no arrayPalavra
    for (let i in arrayLetras) {
        //Compara a letra na posição i de arrayLetras com a posição palavra[palavra.length-i]. Se forem diferentes, não é um palindromo
            if (arrayLetras[i] != palavra[(palavra.length - 1) - i]) {
                ePalindromo = false;
            } else {
                ePalindromo = true;
            }
        
    }
    return ePalindromo;
}

//Palavra teste
console.log(verificarPalindromo("amor"));