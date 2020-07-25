//Objeto copiado - exercícios for/in
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

  //Utilizando o for in para imprimir apenas as propriedades
  for (let propriedades in info) {
      console.log(propriedades);
  }