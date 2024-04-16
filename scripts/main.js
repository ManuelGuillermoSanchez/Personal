//Instanciar el constructor, primero importar la clase
import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
// 
var cursos = [
    new Curso("Practicas escenciales para el agilismo", 20, 90, true, 2024),
    new Curso("Principios de la ingenieria de software", 15, 99, true, 2024),
    new Curso("Aplicaciones web", 20, 90, true, 2024),
    new Curso("Pruebas automatizadas", 20, 90, true, 2024)
];
//todas las instancias deben estar con el new
export var ap = new Aprendiz("Juan Pablo", "Reyez Gomez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
//Manejar funciones que interactuan con el DOM
//mostra los valores, signo adminiracion al final, no hay riesgo que sea un nulo
//1. Declarar el elemento global que contendra la tabla de estadisitcas
var apredizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("boton-filtro");
//hay que hacer un casting para obtenerlo<HTMLInputElement>
var textoBusqueda = document.getElementById("texto-busqueda");
//Vamos a realizar el evento del click en el boton, se declara mas abajo
//Funcion anonima
btnFiltro.onclick = function () {
    var text = textoBusqueda.value;
    //aqui agregamos una condicional, si nadie a puesto nada, cambiamos el null
    //por cadena de caracteres vacia
    text = (text == null) ? "" : text;
    //Eliminar todos los cursos que habian antes volver a pintar la tabla
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
};
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\", height=\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    apredizTable.appendChild(tbodyAprendiz);
}
//funcion que complete la tabla de estadisitcas
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    //Crear un elemento muy sencillo
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados</b></td>".concat(numeroCertificados, "</td>");
    estadisticasTable.appendChild(trElement);
}
function mostrarCursosAprendiz(cursos) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td>\n        <td>").concat(curso.horas, "</td>\n        <td>").concat(curso.calificacion, "</td>\n        <td>").concat(curso.certificado, "</td>\n        <td>").concat(curso.anio, "</td>");
        //Cada vez que pase por el curso añade una fila
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}
