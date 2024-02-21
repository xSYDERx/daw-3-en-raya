class MovimientoLogger {
    #logContainer;
  
    constructor(logContainerId = 'logs') {
      this.#logContainer = document.getElementById(logContainerId);
    }
  
    logMovimiento(jugador, fila, columna) {
      const mensaje = `El jugador ${jugador} ha puesto una ficha en la casilla ${fila},${columna}`;
      this.#actualizarLog(mensaje);
    }
  
    logFinPartida(jugador) {
      const mensaje = `Fin de la partida. Ganó el jugador ${jugador}`;
      this.#actualizarLog(mensaje);
    }
  
    logEmpate() {
      const mensaje = 'Fin de la partida. Empate.';
      this.#actualizarLog(mensaje);
    }
  
    logInicioRonda() {
      const mensaje = 'Inicio de una nueva ronda.';
      this.#actualizarLog(mensaje);
    }
  
    #actualizarLog(mensaje) {
      const logEntry = document.createElement('p');
      logEntry.textContent = `${new Date().toLocaleTimeString()}: ${mensaje}`;
      this.#logContainer.appendChild(logEntry);
    }
  }
  
  export default MovimientoLogger;
  