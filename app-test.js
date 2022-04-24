import { Preguntas } from "./data/armar-test.js";
import { Test } from "./models/Test.js";
import { UI } from "./models/UI.js";

const renderPage = (test, ui) => {
  var usu = test.getUsuario();
  console.log(usu);
  if (test.finalizar()) {
    ui.verScores(test.score);
  } else if (test.estadoUsuario() == true) {
    ui.verPanelPerdedor();
    console.log("perdio");
  } else {
    ui.verTexto(test.getPreguntasIndex().texto);
    ui.verSeleccion(test.getPreguntasIndex().seleccion, (selec) => {
      test.checkRespuesta(selec);
      ui.verProgreso(test.preguntaCount + 1, 5, test.score);
      renderPage(test, ui);
    });
  }
};

function main() {
  const test = new Test(Preguntas);
  const ui = new UI();

  ui.crearUsuario(()=>{
    const usuario = document.getElementById('nombre').value;
    test.setUsuario(usuario);
    console.log("getUsuario", test.getUsuario());
    renderPage(test, ui);
  });
}

// firebase
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
main();