import {Curso} from './curso.js'

//declaración de la enumracion 
export enum NivelEducativo{
    BACHILLERATO = "Bchillerato",
    UNIVERSIDAD = "Universidad",
    POSGRADO = "Posgrado"
}

//puesto vamos a plantear la relacion que un estudiante puede estar en
//varios cursos, toca importar primero la clase cuuso


//export permitir que la clase se vea en otros archivos
export class Aprendiz{
    //metodo constructor
    constructor(
        public nombres: string, 
        public apellidos: string, 
        public avatar: string, 
        public edad: number, 
        public nivelEducativo: NivelEducativo, 
        // [] es para denotar que es un array
        public cursos: Curso[])
    {

    }
    // numero de cursos certificados, itulizaremos un c iclo con un condicional
    public darCursosCertificados():number{
        let totalCursosC:number = 0;
        for(let index = 0; index < this.cursos.length; index++)
        {
            let curso: Curso = this.cursos[index];
            if(curso.certificado)
            {
                totalCursosC+=1;
            }
        }
        return totalCursosC;
    }
}