//declaración de la enumracion 
export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bchillerato";
    NivelEducativo["UNIVERSIDAD"] = "Universidad";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
//puesto vamos a plantear la relacion que un estudiante puede estar en
//varios cursos, toca importar primero la clase cuuso
//export permitir que la clase se vea en otros archivos
var Aprendiz = /** @class */ (function () {
    //metodo constructor
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo, 
    // [] es para denotar que es un array
    cursos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    // numero de cursos certificados, itulizaremos un c iclo con un condicional
    Aprendiz.prototype.darCursosCertificados = function () {
        var totalCursosC = 0;
        for (var index = 0; index < this.cursos.length; index++) {
            var curso = this.cursos[index];
            if (curso.certificado) {
                totalCursosC += 1;
            }
        }
        return totalCursosC;
    };
    return Aprendiz;
}());
export { Aprendiz };
