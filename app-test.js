import { Preguntas } from "./data/armar-test.js";
import { Test } from "./models/Test.js";
import { UI } from "./models/UI.js";
console.log(Preguntas);
const renderPage = (test, ui) => {
  if (test.finalizar() ) {
    ui.verScores(test.score);

  } else {
    ui.verTexto(test.getPreguntasIndex().texto);
    ui.verSeleccion(test.getPreguntasIndex().seleccion, (selec) => {
      test.checkRespuesta(selec);

      renderPage(test, ui);
    });
  }
};

function main() {
  const test = new Test(Preguntas);
  const ui = new UI();
  renderPage(test, ui);
}

main();
