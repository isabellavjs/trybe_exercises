// CLick counter
const buttonClick = document.querySelector('#clickButton');
const numberClicks = document.querySelector('#clicks')
let clickCounter = 0;

buttonClick.addEventListener('click', () => {
  clickCounter += 1;
  numberClicks.innerHTML = clickCounter;
});