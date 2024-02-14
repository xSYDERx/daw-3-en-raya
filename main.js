import Tablero from './tablero';
import './style.scss';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const buttonCreateTable = document.getElementById('createTable');
const inputDimensions = document.getElementById('dimension');
const resetButton = document.getElementById('resetGame');
const clearButton = document.getElementById('clearGame');
const preGame = document.querySelector('.preGame');
const inGame = document.querySelector('.inGame');

let tablero;

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

  tablero = new Tablero(parseInt(inputDimensions.value));
  tablero.imprimir('tablero');

  preGame.classList.toggle('hide');
  inGame.classList.toggle('hide');
});

inputDimensions.addEventListener('keydown', () => {
  inputDimensions.classList.remove('error');
});

clearButton.addEventListener('click', () => {
  let actualDimension = tablero.dimension;

  tablero = null;
  tablero = new Tablero(actualDimension);
  tablero.imprimir('tablero');
});

resetButton.addEventListener('click', (e) => {
  document.getElementById(tablero.elementID).innerHTML = '';
  tablero = null;
  preGame.classList.toggle('hide');
  inGame.classList.toggle('hide');
  inputDimensions.value = '';
  inputDimensions.focus();
});
