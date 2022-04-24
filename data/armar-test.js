import {Pregunta} from '../models/Pregunta.js'
import { data } from './preguntas.js'

export const Preguntas = data.map(
    (pregunta) =>
      new Pregunta(pregunta.texto, pregunta.seleccion, pregunta.respuesta)
  );
