import { Pregunta } from "../models/Pregunta.js";
export class Test {
  preguntaIndex = this.getRandomInt(0, 4);
  score = 0;
  preguntaCount = 0;
  perdio = false;
  Usuario = ' ';
  /**
   *
   * @param {Pregunta[]} preguntas
   */
  constructor(preguntas) {
    this.preguntas = preguntas;
  }
  
  getUsuario(){
    return this.Usuario;
  }
  setUsuario(usuario2){
    this.Usuario = usuario2; 
  }
  estadoUsuario(){
    return this.perdio;
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
      this.perdio = true;
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
