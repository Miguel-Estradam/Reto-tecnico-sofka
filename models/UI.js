export class UI {
  constructor() {}

  /**
   *
   * @param {sting} text
   */
  verTexto(texto) {
    const questionTitle = document.getElementById("texto");
    questionTitle.innerHTML = texto;
  }

  /**
   *Acciones del boton y respuesta correcta
   * @param {string[]} seleccion
   */
  verSeleccion(seleccion, callback) {
    const choicesContainer = document.getElementById("preguntas");
    choicesContainer.innerHTML = ""; //limpiar botones
    
    for (let i = 0; i < seleccion.length; i++) {
      const button = document.createElement("button");
      button.innerText = seleccion[i];
      button.className = "button";
      button.addEventListener("click", () => callback(seleccion[i]));
      

      choicesContainer.append(button);
    }
  }
  //gameOverHTML es para mostrar la informacion en el html
  verScores(score) {
    const gameOverHTML = `
      <h1>Felicidades</h1>

      <h2 id="score">Your scores: ${score}</h2>
      
      <button class="buttonUsuarios" onclick="window.location.href='/ganadores.html'">Ver Ganadores</button>
      `;
    const element = document.getElementById("test");
    const element2 = document.getElementById("progreso");
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progreso");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
