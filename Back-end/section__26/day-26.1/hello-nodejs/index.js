const readline = require('readline-sync');

function executeFormula() {
  const a = readline.questionInt("Digite o valor de a: ");
  const b = readline.questionInt("Digite o valor de b: ");
  const c = readline.questionInt("Digite o valor de c: ");

  console.log("Coeficientes: a = %s, b = %s, c = %s", a, b, c);

  const delta = calculaDelta(a, b, c);

  if (delta < 0) {
    console.log("Valor de delta inválido: %s é negativo", delta);
    return
  }
  console.log("Delta: %s", delta);

  const result = calculaX(a, b, delta);
  return console.log("Raízes encontradas: %s", result);
}

function calculaDelta(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
};

function calculaX (a, b, delta) {
  const x1 = ((-b + Math.sqrt(delta)) / 2 * a).toFixed(2);
  const x2 = ((-b - Math.sqrt(delta)) / 2 * a).toFixed(2);

  return {x1, x2};
};

executeFormula();
