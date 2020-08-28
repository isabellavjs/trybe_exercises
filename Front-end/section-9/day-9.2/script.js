//  Exercise 2: 
const promise = new Promise((resolve, reject) => {
  const randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 50))
  .map(element => element ** 2)

  const resultSum = randomArray.reduce((result, element) => result + element,0);
  if (resultSum > 8000) return reject(resultSum);
  resolve(resultSum);
})
.then(resultSum => `A soma do array e ${resultSum}`)
.then(msg => console.log(msg))
.catch(resultSum => console.log(`A soma do array e ${resultSum} - esse numaro e maior que 8000`));
