//declaración de la enumracion 
export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bchillerato";
    NivelEducativo["UNIVERSIDAD"] = "Universidad";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
//export permitir que la clase se vea en otros archivos
var Aprendiz = /** @class */ (function () {
    //metodo constructor
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
    }
    return Aprendiz;
}());
export { Aprendiz };
