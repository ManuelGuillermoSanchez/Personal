//Instanciar el constructor, primero importar la clase
import {Aprendiz, NivelEducativo} from './aprendiz.js'

//todas las instancias deben estar con el new
export const ap = new Aprendiz("Juan Pablo", "Reyez Gomez", "avatar.png", 30, NivelEducativo.POSGRADO);

console.log(ap)