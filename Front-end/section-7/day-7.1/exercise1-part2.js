// Function which receives a number and return its factorial
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  else {
    return (number*factorial(number-1));
  }
  }
console.log(factorial (4));
