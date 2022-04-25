import { Pregunta } from "../models/Pregunta.js";
export class Test {
  preguntaIndex = this.getRandomInt(0, 4);
  score = 0;
  preguntaCount = 0;
  perdio = false;
  Usuario = ' ';
  puntos = 5;
  dolares = 5;

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

  // Verifica las respuestas y otorga los puntos
  checkRespuesta(respuesta) {
    if (this.getPreguntasIndex().respuestaCorrecta(respuesta)) {
      this.preguntaCount++;
      this.dolares = this.preguntaCount * this.puntos;
      
      this.preguntaIndex = this.getRandomInt(0, 4) + this.preguntaCount * 5;
      this.score = this.score + this.dolares;

    } else {
      this.perdio = true; //variable bolean creada para verificar el estado test
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
