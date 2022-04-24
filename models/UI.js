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
   *
   * @param {string[]} choices
   */
  verSeleccion(choices, callback) {
    const choicesContainer = document.getElementById("preguntas");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }

  verScores(score) {
    const gameOverHTML = `
      <h1>Result</h1>
      <h2 id="score">Your scores: ${score}</h2>
      `;
    // <h2 id="score">Your scores: ${quiz.score}</h2>

    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
