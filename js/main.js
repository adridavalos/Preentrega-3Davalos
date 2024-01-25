import * as calcular from "./calculo.js";

let formulario = document.getElementById("formulario");
let botonCalcular = document.getElementById("botonCalcular");
let contenedorListaDeAlumnosAgregados = document.getElementById("contenedor");
let calificacionInput = document.getElementById("inputCalificacion");
let nombreInput = document.getElementById("inputNombre");

const mostrarAlumnos = () => {
    if (localStorage.getItem("alumnos") != null) {
        const alumnos = JSON.parse(localStorage.getItem("alumnos"));
        contenedorListaDeAlumnosAgregados.innerHTML = '';
        for (let index = 0; index < alumnos.length; index++) {
            let div = document.createElement("div")
            div.innerHTML = 
                `<h6 class="card-title mt-2">${alumnos[index].nombre}  ${alumnos[index].calificacion}</h6>`
            contenedorListaDeAlumnosAgregados.append(div);
        }
    }else{
        contenedorListaDeAlumnosAgregados.innerHTML = '';
        let div = document.createElement("div")
        div.innerHTML = `<h2 class="card-title mt-5">No hay ningun alumno cargado.</h2>`;
        contenedorListaDeAlumnosAgregados.append(div);
    }
};

window.onload = mostrarAlumnos;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
    let input1 = e.target.children[0].children[0].children[0]; 
    let input2 = e.target.children[0].children[1].children[0];
    let input2Parse = parseFloat(input2.children[1].value);

    if (input2Parse > 0 && input2Parse <= 10 && input1.children[1].value != ""){
        let alumnos = [];
        calificacionInput.classList.remove("error");
        nombreInput.classList.remove("error");
        
        if (localStorage.getItem("alumnos") != null) {
            alumnos = JSON.parse(localStorage.getItem("alumnos"));
        }
        alumnos.push({
            nombre: input1.children[1].value,
            calificacion: input2Parse,
        });
        localStorage.setItem("alumnos", JSON.stringify(alumnos));
        mostrarAlumnos()
        input1.children[1].value = "";
        input2.children[1].value = "";
        
        
    } else {
        if (input1.children[1].value == "") {
            calificacionInput.classList.remove("error");
            nombreInput.classList.add("error");
        } else {
            nombreInput.classList.remove("error")
            calificacionInput.classList.add("error");
    }
    }
});
botonCalcular.addEventListener("submit", (e) => {
    e.preventDefault();
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));
    if (alumnos != null ){
        let estudianteConCalificacionMasAlta = calcular.encontrarEstudianteConCalificacionMasAlta(alumnos);
        let estudianteConCalificacionMasBaja = calcular.encontrarEstudianteConCalificacionMasBaja(alumnos);
        let div = document.createElement("div")
        div.innerHTML = 
            `<div class="card">
                <h4 class="card-title mt-3">Promedio obtenido: 
                ${(calcular.calcularPromedio( calcular.sumarCalificaciones(alumnos), alumnos.length)).toFixed(2)}</h4>
                <h4 class="card-title">La calificación mas alta es de ${estudianteConCalificacionMasAlta["nombre"]}: 
                ${estudianteConCalificacionMasAlta["calificacion"]}</h4>
                <h4 class="card-title">La calificación mas baja es de ${estudianteConCalificacionMasBaja["nombre"]}: 
                ${estudianteConCalificacionMasBaja["calificacion"]}</h4>
            </div>`;
        contenedorListaDeAlumnosAgregados.append(div); 
    }
});
botonCalcular.addEventListener("reset", (e) => {
    e.preventDefault();
    localStorage.clear();
    mostrarAlumnos();
    calificacionInput.classList.remove("error");
    nombreInput.classList.remove("error");
    Swal.fire({
        title: "Se borro con éxito.",
        icon: "success"
    });
});

