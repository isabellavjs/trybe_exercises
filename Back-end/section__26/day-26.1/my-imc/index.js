const inquirer = require('inquirer');

async function executeImc() {

  const questions = await inquirer.prompt(
    [
      {
        type: 'input',
        name: 'weight',
        message: 'Type your weight:',
        validate: function validateInput(input) {
          if (isNaN(input)) { return "Input is not valid" }
        }, 
      },
      {
        type: 'input',
        name: 'height',
        message: 'Type your height:',
        validate: function validateInput(input) {
          if (isNaN(input)) { return "Input is not valid" }
        },
      }
    ]
  )

  const weight = parseFloat(questions.weight);
  const height = parseFloat(questions.height);

  console.log("Patient info: weight = %s, height = %s", weight, height);

  const result = (weight / Math.pow(height, 2)).toFixed(2);

  if (result > 40) { return console.log("IMC: %s - Obesity III and IV", result) }
  else if (result < 40 && result > 35) { return console.log("IMC: %s - Obesity II", result) }
  else if (result < 35 && result > 30) { return console.log("IMC: %s - Obesity I", result) }
  else if (result < 30 && result > 25) { return console.log("IMC: %s - Over weight", result) }
  else if (result < 25 && result > 18.5 ) { return console.log("IMC: %s - Normal weight", result) }
  else { return console.log("IMC: %s - Above ideal weight", result) }
}

executeImc();