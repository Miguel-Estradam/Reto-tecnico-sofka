import { Preguntas } from "./data/armar-test.js"
import {Test} from "./models/Test.js"
import {UI} from "./models/UI.js"

const test = new Test(Preguntas);
    const ui = new UI();
function main(){
    
    ui.verTexto(test.getPreguntasIndex().texto)
    ui.verSeleccion(test.getPreguntasIndex().seleccion);
}
console.log(Preguntas);
main();