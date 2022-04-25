export class UI {
  constructor() {}

  /**
   *
   * @param {sting} text
   */
  crearUsuario(callback) {
    const titulo = document.getElementById("titulo");
    const texto = document.getElementById("texto");
    const preguntas = document.getElementById("preguntas");
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
    texto.innerHTML = "<h3>Crea tu usuario</h3>";
    preguntas.innerHTML = formUsuario;
    progreso.innerHTML = " ";
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
    const titulo = document.getElementById("titulo");
    const choicesContainer = document.getElementById("preguntas");
    const salir = document.getElementById("salir");
    choicesContainer.innerHTML = ""; //limpiar botones
    salir.innerHTML = " ";
    const button2 = `
    <button class="buttonUsuarios" onclick="window.location.href='/index.html'">Salir</button>
    `;
    for (let i = 0; i < seleccion.length; i++) {
      const button = document.createElement("button");
      button.innerText = seleccion[i];
      button.className = "button";
      button.addEventListener("click", () => callback(seleccion[i]));
      titulo.innerHTML = "Test programación";
      choicesContainer.append(button);
    }
    salir.innerHTML = button2;
  }
  //gameOverHTML es para mostrar la informacion en el html
  verScores(score,usuario) {
    const gameOverHTML = `
      <h1>Felicidades ${usuario}</h1>

      <h2 id="score">Te has ganado: ${score} Dolares</h2>
      
      <button class="buttonUsuarios" onclick="window.location.href='/ganadores.html'">Ver Ganadores</button>
      `;
    const element = document.getElementById("test");
    const element2 = document.getElementById("progreso");
    element.innerHTML = gameOverHTML;
  }

  verProgreso(currentIndex, total, score, callback, dolares) {
    const botones = `
    <p>Valor de la pregunta : $ ${dolares}</p>
      <p>Pregunta ${currentIndex} de ${total}</p>
      <p;>puntos: $ ${score} </p;
      
    `;

    const button2 = `
    <button class="buttonUsuarios" id="terminar-test-button" >Rendirse y reclamar premio</button>
    <button class="buttonUsuarios" onclick="window.location.href='/index.html'">Salir</button>
    `;

    var element = document.getElementById("progreso");
    var element2 = document.getElementById("salir");
    element2.innerHTML = button2;
    element.innerHTML = botones;
    const button = document.getElementById("terminar-test-button");
    button.addEventListener("click", () => callback());
  }

  // panel que muestre si llega a perder el test
  verPanelPerdedor() {
    const textoPerdio = `
      <h3>Pregunta incorrecta</h3>
      <p>Lo sentimos, ha perdido el test</p>
      <p>Gracias por participar</p>
    `;
    const boton = `
      <button class="buttonUsuarios" onclick="window.location.href='/index.html'">Salir</button>
    `;
    const borrar = document.getElementById("texto");
    const preguntaTexto = document.getElementById("preguntas");
    const borrar2 = document.getElementById("progreso");
    const button = document.getElementById("salir");
    borrar.innerHTML = " "; //limpieza del html
    borrar2.innerHTML = " "; //limpieza del html
    preguntaTexto.innerHTML = textoPerdio;
    button.innerHTML = boton;
  }
}
