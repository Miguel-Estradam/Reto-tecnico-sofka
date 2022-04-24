
export class UI {
  constructor() {}

  /**
   *
   * @param {sting} text
   */
  crearUsuario(callback) {
    const titulo = document.getElementById("titulo");
    const texto = document.getElementById("texto");
    const preguntas= document.getElementById("preguntas");
    const progreso = document.getElementById("progreso");

    //formulario de usuario
    const formUsuario = `
    <div>
    <input type="text" name="nombre" id="nombre" placeholder="Escriba su nombre de usuario" size="40">
    <button type="submit" id="crear-usuario-button">Comenzar</button>
    </div>
    `;
    //imprimir 
    titulo.innerHTML = "Bienvenido al test"; 
    texto.innerHTML = "Crea tu usuario"; 
    preguntas.innerHTML = formUsuario;
    progreso.innerHTML = " "
    const button = document.getElementById("crear-usuario-button");
    button.addEventListener("click", () => callback());
  }
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

  verProgreso(currentIndex, total, score) {
    const botones = `
      <p>Pregunta ${currentIndex} de ${total}</p>

      
    `;

    const button2 =`
    <button class="buttonUsuarios" onclick="verScore${score}'">Rendirse y reclamar premio</button>
    <button class="buttonUsuarios" onclick="window.location.href='/index.html'">Salir</button>
    `;

    var element = document.getElementById("progreso");
    var element2 = document.getElementById("salir");
    element2.innerHTML= button2;
    element.innerHTML = botones;
  }

  verPanelPerdedor() {
    const textoPerdio = `
      <h3>Pregunta incorrecta</h3>
      <p>Lo sentimos, ha perdido el test</p>
      <p>Gracias por participar</p>
      <button class="buttonUsuarios" onclick="window.location.href='/index.html'">Salir</button>
    `;
    const borrar = document.getElementById("texto");
    const preguntaTexto = document.getElementById("preguntas");
    const borrar2 = document.getElementById("progreso");
    borrar.innerHTML = " ";
    borrar2.innerHTML = " ";
    preguntaTexto.innerHTML = textoPerdio;
  }
}
