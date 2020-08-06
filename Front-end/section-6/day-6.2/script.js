//Variáveis
const form = document.getElementById('form-curriculum');
const estados = document.getElementById('estado');
const opcoesEstados = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const enviarButton = document.getElementById('enviar-formulario');
const clearButton = document.getElementById('limpar');
const radioOptions = document.getElementsByName('casa-apartamento');

//Datepicker and justValidate
window.onload = function() {
  createListState();

  var picker = new Pikaday({ 
    field: document.getElementById('datepicker'),
    onSelect: function(date) {
    console.log(date);
    }
    });

  enviarButton.addEventListener('click', JustValidate());

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
        console.log(form, values)
      },
    });
}

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
  let userInfo = document.createElement('div');
  userInfo.id = 'answer';
  const section = document.querySelector('section');
  section.appendChild(userInfo);
  const divAnswer = document.querySelector('#answer');

  for (let index = 0; index < form.length; index += 1) {
    if (index < 6 || index > 7) { //Seleciona todos os inputs do usuário, exceto o tipo radio.
      const userInfo = document.createElement('p');
      userInfo.innerHTML = form[index].value;
      divAnswer.appendChild(userInfo);
    } 
    else if (index === 6) {
      let radioValue;
      if (radioOptions[0].checked) {
        radioValue = radioOptions[0].value;
      const userInfo = document.createElement('p');
      userInfo.innerHTML = radioValue;
      divAnswer.appendChild(userInfo);
      } else {
        false;
      }
    }
    else if (index === 7) {
      let radioValue;
      if (radioOptions[1].checked) {
        radioValue = radioOptions[1].value;
      const userInfo = document.createElement('p');
      userInfo.innerHTML = radioValue;
      divAnswer.appendChild(userInfo);
      } else {
        false;
      }
    }
  }
}

//Limpar dados
clearButton.addEventListener('click', function() {
  form.reset() 
})

