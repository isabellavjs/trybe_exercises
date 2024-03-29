//Variáveis
const form = document.getElementById('form-curriculum');
const estados = document.getElementById('estado');
const opcoesEstados = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const enviarButton = document.getElementById('enviar-formulario');
const clearButton = document.getElementById('limpar');
const radioOptions = document.getElementsByName('casa-apartamento');

//Criar opçoes para selecionar o estado
let value = 1;

function createListState() {
    for (let index = 0; index < opcoesEstados.length; index += 1) {
        const createOptions = document.createElement('option');
        estados.appendChild(createOptions).innerText = opcoesEstados[index];
        estados.appendChild(createOptions).value = opcoesEstados[index];
    }
}

//Interromper o fluxo automático
form.addEventListener('submit', function(event) {
  event.preventDefault();
  userAnswer();
})

//Armazenar os dados em uma div ao clicar em enviar
function userAnswer() {
  const elementsForm = document.getElementById('form-curriculum').elements;
  const divAnswer = document.querySelector('#dados-user');
 
  for (let index = 0; index < elementsForm.length; index += 1) {
    if (elementsForm[index].tagName !== 'button') { 
      console.log(elementsForm[index].value);
      let userDados = document.createElement('p');
     
      if (elementsForm[index].tagName === 'input' && elementsForm[index].type === 'radio' && elementsForm[index].checked) {
      const radioValues = {"casa": "Casa", "apartamento": "Apartamento"}
      userDados.innerHTML += radioValues[elementsForm[index].value];
      } else {
      if (elementsForm[index].tagName === 'input' && elementsForm[index].type === 'radio') {
        userDados.innerHTML += elementsForm[index].value;
      }
      }
      if (elementsForm.tagName === 'select' || elementsForm.tagName === 'textarea') {
      userDados.innerHTML += elementsForm[index].value;
      }
    divAnswer.appendChild(userDados);
    }
  }
}

//Limpar dados
clearButton.addEventListener('click', function() {
  form.reset() 
})

//Datepicker and justValidate
window.onload = function() {
  createListState();

  var picker = new Pikaday({ field: document.getElementById('datepicker') ,
    onSelect: function(date) {
    console.log(date);
    }
    });

    new JustValidate('.curriculum-form', {
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        cpf: {
          required: true
        },
        endereco: {
          required: true
        },
        cidade: {
          required: true
        },
        estado: {
          required: true
        },
        resumoCurriculo: {
          required: true
        },
        descricaoCargo: {
          required: true
        },
        cargo: {
          required: true
        },
        data: {
          required: true
        },
      },
      messages: {
        name: {
          required: 'Campo obrigatório.'
        },
        email: {
          required: 'Campo obrigatório.',
          email: 'Endereço inválido.'
        },
        cpf: {
          required: 'Campo obrigatório.'
        },
        estado: {
          required: 'Campo obrigatório.'
        },
        resumoCurriculo: {
          required: 'Campo obrigatório.'
        },
        descricaoCargo: {
          required: 'Campo obrigatório.'
        },
        cargo: {
          required: 'Campo obrigatório.'
        },
        data: {
          required: 'Campo obrigatório.'
        } 
      },
      submitHandler: function (form, values) {
        console.log(form, values);
        userAnswer();
      },
    });
}


