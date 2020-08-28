//  Exercise 3: Manipulating the result
const promise = new Promise((resolve, reject) => {
  const randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 50))
  .map(element => element ** 2)

  const resultSum = randomArray.reduce((result, element) => result + element,0);
  if (resultSum > 8000) return reject(resultSum);
  resolve(resultSum);
})
.then(resultSum => result1 = Math.round(resultSum / 2))
.then(resultSum => result2 = Math.round(resultSum / 3))
.then(resultSum => result3 = Math.round(resultSum / 5))
.then(resultSum => result4 = Math.round(resultSum / 10))
.then(() =>  {
  const newArray = [];
  newArray.push(result1, result2, result3, result4)
  return console.log(newArray);
})
.catch(resultSum => console.log('E mais de oito mil! Essa promise deve estar quebrada!'));
