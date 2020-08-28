
const promise = new Promise((resolve, reject) => {
  const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50))
    .map(element => element ** 2);

  const resultSum = randomArray.reduce((result, element) => result + element, 0);

  (resultSum > 8000) ? reject() : resolve(resultSum);
});

promise
  .then(resultSum =>  [2, 3, 5, 10].map(num => resultSum / num))
  .then(arr => {
    const sum = arr.reduce((acc, number) => acc + number, 0);
    Math.round(sum);
    console.log(sum);
  })
  .catch(() => console.log('E mais de oito mil! Essa promise deve estar quebrada!'));
