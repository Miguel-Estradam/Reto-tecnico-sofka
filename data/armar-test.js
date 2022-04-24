import {Pregunta} from '../models/Pregunta.js'
import { nivel1 } from './nivel-1.js'

export const Preguntas = nivel1.map(
    (pregunta) =>
      new Pregunta(pregunta.texto, pregunta.seleccion, pregunta.respuesta)
  );
