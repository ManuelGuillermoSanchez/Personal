//declaración de la enumracion 
export enum NivelEducativo{
    BACHILLERATO = "Bchillerato",
    UNIVERSIDAD = "Universidad",
    POSGRADO = "Posgrado"
}

//export permitir que la clase se vea en otros archivos
export class Aprendiz{
    //metodo constructor
    constructor(public nombres: string, public apellidos: string, public avatar: string, public edad: number, public nivelEducativo: NivelEducativo)
    {

    }
}