import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

class Tablero {
  #casillas;  // Este será el array de arrays donde guardaremos lo que hay en cada posición
  #dimension; // Esta variable determinará el tamaño del tablero
  #turno;     // En esta variable queda guardo a quien le toca, toma valores: X o O
  #elementID;

  constructor(dimension = 3) {
    this.#casillas = new Array(dimension);
    this.#dimension = dimension;
    for (let i = 0; i <this.#dimension; i++){
      this.#casillas[i] = new Array(this.#dimension);
    }
    this.#turno = 'X';
  }

  imprimir(elementId) {
    let tablero = document.getElementById(elementId);
    this.#elementID = elementId;
    tablero.innerHTML = '';
    for (let fila = 0; fila < this.#dimension; fila++){
      for (let columna = 0; columna < this.#dimension; columna++){
        let casilla = document.createElement('div');
        casilla.dataset.fila = fila;
        casilla.dataset.columna = columna;
        casilla.dataset.libre = '';
        if (this.#casillas[fila][columna]) {
          casilla.textContent(this.#casillas[fila][columna]);
          casilla.dataset.libre = this.#casillas[fila][columna];
        }
        tablero.appendChild(casilla);

        // Y ahora creamos el eventlistener para esa casilla en concreto
        casilla.addEventListener('click', (e) => {
          let casillaSeleccionada = e.currentTarget;
          if (casillaSeleccionada.dataset.libre === '') {
            casillaSeleccionada.textContent = this.#turno;
            this.setCasilla(
              casillaSeleccionada.dataset.fila,
              casillaSeleccionada.dataset.columna,
              this.#turno
            )
            casillaSeleccionada.dataset.libre = this.#turno;
            this.comprobarResultados();
            this.toogleTurno();
          }
        });
      }
    }
    tablero.style.gridTemplateColumns = `repeat(${this.#dimension}, 1fr)`;
  }

  isFree(fila, columna) {
    return true ? this.#casillas[fila][columna] === undefined : false;
  }

  setCasilla(fila, columna, valor) {
    if (this.isFree(fila, columna)) {
      this.#casillas[fila][columna] = valor;
      return true;
    }
    return false;
  }

  getCasilla(fila, columna) {
    return this.#casillas[fila][columna];
  }

  toogleTurno() {
    if (this.#turno === 'X') {
      this.#turno = 'O';
    } else {
      this.#turno = 'X';
    }
  }

  comprobarResultados() {
    // Comprobamos filas
    let fila;
    let columna;
    let ganado = false;
    for (fila = 0; fila < this.#dimension && !ganado; fila++){
      let seguidas = 0;
      for (columna = 0; columna < this.#dimension; columna++){
        if (columna !== 0) {
          if (this.getCasilla(fila, columna) === this.getCasilla(fila, columna - 1)) {
            if (this.getCasilla(fila, columna) !== undefined) {
              seguidas++;
            }
          }
        }
      }
      if (seguidas === this.#dimension - 1) {
        console.log('Linea');
        ganado = true;
      }
    }

    // Comprobar columnas
    for (columna = 0; columna < this.#dimension && !ganado; columna++){
      let seguidas = 0;
      for (fila = 0; fila < this.#dimension; fila++){
        if (fila !== 0) {
          if (this.getCasilla(fila, columna) === this.getCasilla(fila-1, columna)) {
            if (this.getCasilla(fila, columna) !== undefined) {
              seguidas++;
            }
          }
        }
      }
      if (seguidas === this.#dimension - 1) {
        console.log('Columna');
        ganado = true;
      }
    }

    let seguidas = 0;
    for (let i = 0; i < this.#dimension; i++){
      if (i !== 0) {
        if ((this.getCasilla(i, i) === this.getCasilla(i - 1, i - 1)) && this.getCasilla(i,i) !== undefined) {
          seguidas++;
        }
      }
    }
    if (seguidas === this.#dimension - 1) {
      console.log('Diagonal');
      ganado = true;
    }

    if (ganado) {
      Toastify({
        text: `Ha ganado el jugador ${this.#turno}`,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "blue",
        },
        onClick: function(){} // Callback after click
      }).showToast();

      let libres = document.querySelectorAll('div[data-libre=""]');
      libres.forEach((casillaLibre) => {
        casillaLibre.dataset.libre = '-';
      });
    }

  }

  get dimension() {
    return this.#dimension;
  }

  get elementID() {
    return this.#elementID;
  }
}

export default Tablero;
