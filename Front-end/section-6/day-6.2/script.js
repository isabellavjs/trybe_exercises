//Initialize datepicker and justValidate
window.onload = function() {

    var picker = new Pikaday({ 
        field: document.getElementById('datepicker'),
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
      },
      messages: {
        name: {
          required: 'Campo obrigatório.'
        },
        email: {
          required: 'Campo obrigatório',
          email: 'Endereço inválido'
        }, 
      },
      submitHandler: function (form, values) {
        console.log(form, values)
      },
    });

}

//Options to select the state
const estados = document.getElementById('estado');
const opcoesEstados = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let value = 1;
//Create the options to select
function createListState() {
    for (let index = 0; index < opcoesEstados.length; index += 1) {
        const createOptions = document.createElement('option');
        estados.appendChild(createOptions).innerText = opcoesEstados[index];
        estados.appendChild(createOptions).value = opcoesEstados[index];
    }
}
createListState();

//Save data in a section, and add in a div when submit botton is clicked
function renderCurriculum(event) {
    const formElements = document.getElementById('form-curriculum').elements;

    for (let index = 0; index < formElements.length; index += 1) {
        if (formElements[index].className === 'field') {
            document.getElementById('render-curriculum').innerHTML += '<div>' + formElements[index].value + '</div>';
        }
    }
}

//Submit button
const enviarButton = document.getElementById('enviar-formulario');
enviarButton.addEventListener('click', renderCurriculum());
