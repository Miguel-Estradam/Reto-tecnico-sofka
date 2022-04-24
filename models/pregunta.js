class Pregunta {
    constructor(texto,seleccion,respuesta){
        /**
         * @param {string} texto  Es la pregunta 
         * @param {string} seleccion  Son las posibles respuestas 
         * @param {string} respuesta Es la respuesta corecta
         */


        this.texto = texto;
        this.seleccion = seleccion;
        this.respuesta = respuesta;
    }
    //funcion respuesta correcta
    /**
   *
   * @param {string} respuesta 
   * @returns {boolean} 
   */
    respuestaCorrecta(respuesta){
        return respuesta === this.respuesta;
    }
}


export { Pregunta };