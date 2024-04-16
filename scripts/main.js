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
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\", height=\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>edad:</td><td>" + aprendiz.edad + "</td></tr>";
    apredizTable.appendChild(tbodyAprendiz);
}
//funcion que complete la tabla de estadisitcas
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    //Crear un elemento muy sencillo
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados</b></td>" + numeroCertificados + "</td>";
    estadisticasTable.appendChild(trElement);
}
function mostrarCursosAprendiz(aprendiz) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, _a = aprendiz.cursos; _i < _a.length; _i++) {
        var curso = _a[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + curso.nombre + "</td>\n        <td>" + curso.horas + "</td>\n        <td>" + curso.calificacion + "</td>\n        <td>" + curso.certificado + "</td>\n        <td>" + curso.anio + "</td>";
        //Cada vez que pase por el curso añade una fila
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}
