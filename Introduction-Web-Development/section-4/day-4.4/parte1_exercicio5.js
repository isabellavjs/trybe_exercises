//Objeto copiado - exercícios for/in
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain - Dell's Four Color Comics #178",
    nota: "O ultimo MacPatinhas",
    recorrente: "Sim",
  };

  //Utilizando o for in para imprimir apenas as propriedades
  console.log(info.personagem + " e " + info2.personagem);
  console.log(info.origem + " e " + info2.origem);
  console.log(info.nota + " e " + info2.nota);
  if (info.recorrente === info2.recorrente && info.recorrente === "Sim") {
      console.log("Ambos recorrentes");
  }
