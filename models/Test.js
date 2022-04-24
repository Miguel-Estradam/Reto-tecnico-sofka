import { Pregunta } from "../models/Pregunta.js";
export class Test {
  preguntaIndex = this.getRandomInt(0, 4);
  score = 0;
  preguntaCount = 0;

  /**
   *
   * @param {Pregunta[]} preguntas
   */
  constructor(preguntas) {
    this.preguntas = preguntas;
  }

  getPreguntasIndex() {
    return this.preguntas[this.preguntaIndex];
  }
  finalizar() {
    if (this.preguntaCount == 5) {
      return this.preguntas.length === 25; //en la posición 25 no hay preguntas lo que nos manda una alerta y pasa al score
    }
  }
  checkRespuesta(respuesta) {
    if (this.getPreguntasIndex().respuestaCorrecta(respuesta)) {
      this.score++;

      this.preguntaCount++;
      this.preguntaIndex = this.getRandomInt(0, 4) + this.preguntaCount * 5;
    } else {
      this.preguntaCount = 5;
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
