//Instanciar el constructor, primero importar la clase
import {Aprendiz, NivelEducativo} from './aprendiz.js';
import {Curso} from './curso.js'

// 
let cursos = [
    new Curso("Practicas escenciales para el agilismo",20,90,true,2024),
    new Curso("Principios de la ingenieria de software",15,99,true,2024),
    new Curso("Aplicaciones web",20,90,true,2024),
    new Curso("Pruebas automatizadas",20,90,true,2024)
]

//todas las instancias deben estar con el new
export const ap = new Aprendiz(
    "Juan Pablo", 
    "Reyez Gomez", 
    "avatar.png", 
    30, 
    NivelEducativo.POSGRADO,
    cursos
    );
console.log(ap.cursos);

//Manejar funciones que interactuan con el DOM
//mostra los valores, signo adminiracion al final, no hay riesgo que sea un nulo
//1. Declarar el elemento global que contendra la tabla de estadisitcas
let apredizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
//hay que hacer un casting para obtenerlo<HTMLInputElement>
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;

//Vamos a realizar el evento del click en el boton, se declara mas abajo
btnFiltro.onclick = filtrarPorNombre;

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap);

function filtrarPorNombre(): void{
    let text:string = textoBusqueda.value;
    //aqui agregamos una condicional, si nadie a puesto nada, cambiamos el null
    //por cadena de caracteres vacia
    text = (text==null)?"":text;
    //Eliminar todos los cursos que habian antes volver a pintar la tabla
    cursosTable.getElementsByTagName("tbody")[0].remove();
}

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}", height="100"></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>edad:</td><td>${aprendiz.edad}</td></tr>`
    apredizTable.appendChild(tbodyAprendiz);
}


//funcion que complete la tabla de estadisitcas
function mostrarEstadisticas(aprendiz: Aprendiz): void {
    let numeroCertificados:number = aprendiz.darCursosCertificados();
    //Crear un elemento muy sencillo
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Cursos certificados</b></td>${numeroCertificados}</td>`;
    estadisticasTable.appendChild(trElement);
}

function mostrarCursosAprendiz(aprendiz: Aprendiz): void{
    let cursosTbody: HTMLElement = document.createElement("tbody");
    for(let curso of aprendiz.cursos)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td>${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>`;
        //Cada vez que pase por el curso añade una fila
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}