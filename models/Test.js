import {Pregunta} from '../models/Pregunta.js'
export class Test {
    preguntaIndex = 0
    score = 0

    /**
   *
   * @param {Pregunta[]} preguntas
   */
    constructor(preguntas){
        this.preguntas = preguntas;
    }

    getPreguntasIndex(){
        return this.preguntas[this.preguntaIndex];
    }
    finalizar() {
        return this.preguntas.length === this.questionIndex;
      }
    checkRespuesta(respuesta){
        if (this.getPreguntasIndex().respuestaCorrecta(respuesta)){
            this.score++;
        }

        this.preguntaIndex++
    }
}

