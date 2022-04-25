import { Preguntas } from "./data/armar-test.js";
import { Test } from "./models/Test.js";
import { UI } from "./models/UI.js";
import { Fire } from "./firebase.js";
const renderPage = async (test, ui, fire, usu) => {
  if (test.finalizar()) {
    fire(usu, test.score);
    ui.verScores(test.score,usu);
  } else if (test.estadoUsuario() == true) {
    ui.verPanelPerdedor();
  } else {
    ui.verTexto(test.getPreguntasIndex().texto);
    ui.verSeleccion(test.getPreguntasIndex().seleccion, (selec) => {
      test.checkRespuesta(selec);

      renderPage(test, ui, fire, usu);
    });
    ui.verProgreso(
      test.preguntaCount + 1,
      5,
      test.score,
      (terminar) => {
        ui.verScores(test.score,usu), fire(usu, test.score);
      },
      test.dolares
    );
  }
};

function main() {
  const test = new Test(Preguntas);
  const ui = new UI();
  const fire = Fire;
  var usu = " ";
  ui.crearUsuario(() => {
    const usuario = document.getElementById("nombre").value;
    test.setUsuario(usuario);
    usu = test.getUsuario();
    if (usu == " ") {
      main();
    } else {
      renderPage(test, ui, fire, usu);
    }
  });
}

main();
