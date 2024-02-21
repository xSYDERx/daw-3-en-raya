import Tablero from './tablero';
import './style.scss';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import MovimientoLogger from './logs';

const buttonCreateTable = document.getElementById('createTable');
const inputDimensions = document.getElementById('dimension');
const inputRounds = document.getElementById('rounds');
const resetButton = document.getElementById('resetGame');
const clearButtons = document.querySelectorAll('.clearGameButton');
const preGame = document.querySelector('.preGame');
const inGame = document.querySelector('.inGame');
const logs = document.getElementById('logs');
const infoRondaElement = document.getElementById('infoRonda');

let tablero;
let rondasJugadas = 1;
let victoriasX = 0;
let victoriasO = 0;
const movimientoLogger = new MovimientoLogger(logs.id);

buttonCreateTable.addEventListener('click', (e) => {
  if (!inputDimensions.value) {
    Toastify({
      text: "Debe indicar una dimensión válida",
      duration: 3000,
      newWindow: false,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    
    

    inputDimensions.classList.add('error');
    inputDimensions.focus();
    return false;
    
  }

  if (!inputRounds.value) {
    Toastify({
      text: "Debe indicar un numero de rondas válido",
      duration: 3000,
      newWindow: false,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    
    

    inputRounds.classList.add('error');
    inputRounds.focus();
    return false;
    
  }

  if (isNaN(inputDimensions.value)) {
    Toastify({
      text: "Debe introducir un número válido",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function(){} // Callback after click
    }).showToast();

    inputDimensions.classList.add('error');
    inputDimensions.focus();
    return false;
  }

  if (isNaN(inputRounds.value)) {
    Toastify({
      text: "Debe introducir un número válido",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function(){} // Callback after click
    }).showToast();

    inputDimensions.classList.add('error');
    inputDimensions.focus();
    return false;
  }

  let checkMachine = document.getElementById('machine');
  tablero = new Tablero(parseInt(inputDimensions.value),checkMachine.checked);
  tablero.imprimir('tablero');

  infoRondaElement.textContent = `Ronda ${rondasJugadas} de ${inputRounds.value}`;
  preGame.classList.toggle('hide');
  inGame.classList.toggle('hide');
  movimientoLogger.logInicioRonda();
});

inputDimensions.addEventListener('keydown', () => {
  inputDimensions.classList.remove('error');
});

//REVISAR

for (let button of clearButtons) {
  button.addEventListener('click', () => {
    rondasJugadas= rondasJugadas + 1;
    infoRondaElement.textContent = `Ronda ${rondasJugadas} de ${inputRounds.value}`;
    tablero.limpiar();
    if (rondasJugadas > inputRounds.value) {
      rondasJugadas = 1;
      infoRondaElement.textContent = '';
      document.getElementById(tablero.elementID).innerHTML = '';
      setTimeout(() => {
      document.getElementById('marcador').innerHTML = '';
      logs.innerHTML = '';
      tablero = null;

      preGame.classList.toggle('hide');
      inGame.classList.toggle('hide');
      inputDimensions.value = '';
      inputRounds.value = '';
      }, 2000)
    };
  });
}

resetButton.addEventListener('click', (e) => {
  document.getElementById(tablero.elementID).innerHTML = '';
  document.getElementById('marcador').innerHTML = '';
  logs.innerHTML = '';
  tablero = null;
  rondasJugadas = 1;
  infoRondaElement.textContent = '';
  
  preGame.classList.toggle('hide');
  inGame.classList.toggle('hide');
  inputDimensions.value = '';
  inputRounds.value = '';
});

function returnRoundsInput() {
  return inputRounds.value;
}

function returnRounds() {
  return rondasJugadas;
}

export default { returnRoundsInput, returnRounds };