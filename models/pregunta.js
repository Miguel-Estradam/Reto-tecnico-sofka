class Pregunta {
    constructor(testo,seleccion,respuesta){
        this.texto = texto;
        this.seleccion = seleccion;
        this.respuesta = respuesta;
    }
    //funcion respuesta correcta
    respuestaCorrecta(){
        return true;
    }
}

const pregunta = new Pregunta()
console.log(pregunta)