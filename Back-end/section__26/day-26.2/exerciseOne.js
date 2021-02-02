function calculator(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof { num1, num2, num3 } !== Number) reject(new Error("Digite apenas números"));
    const resultSum = num1 + num2;
    const resultMultiplication = resultSum * num3;

    if (resultMultiplication < 50) reject(new Error("Valor muito baixo"));
    resolve(resultMultiplication);
  });

  return promise;
};

calculator(1, 2, "p")
  .then((result) => console.log("resultado da multiplicação: %s", result))
  .catch((err) => console.log("erro: %s", err.message));
