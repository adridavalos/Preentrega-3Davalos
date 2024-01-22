import * as calcular from "./calculo.js";

let formulario = document.getElementById("formulario");
let botonCalcular = document.getElementById("botonCalcular");
let contenedor = document.getElementById("contenedor");
let calificacionInput = document.getElementById("inputCalificacion");
let nombreInput = document.getElementById("inputNombre");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //evito que se recargue el formulario

    let input1 = e.target.children[0].children[0].children[0]; 
    let input2 = e.target.children[0].children[1].children[0];
    let input2Parse = parseInt(input2.children[1].value);
    console.log(input1.children[1].value);

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
        contenedor.innerHTML = '';
        let estudianteConCalificacionMasAlta = calcular.encontrarEstudianteConCalificacionMasAlta(alumnos);
        let estudianteConCalificacionMasBaja = calcular.encontrarEstudianteConCalificacionMasBaja(alumnos);
        let div = document.createElement("div")
        div.innerHTML = `
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title mt-5">Promedio obtenido</h2>
                    <h3 class="card-subtitle mb-2 text-body-secondary">${(calcular.calcularPromedio( calcular.sumarCalificaciones(alumnos), alumnos.length)).toFixed(2)}</h3>
                    <h2 class="card-title">La calificación mas alta es de ${estudianteConCalificacionMasAlta["nombre"]}</h2>
                    <h3 class="card-subtitle mb-2 text-body-secondary">${estudianteConCalificacionMasAlta["calificacion"]}</h3>
                    <h2 class="card-title">La calificación mas baja es de ${estudianteConCalificacionMasBaja["nombre"]}</h2>
                    <h3 class="card-subtitle mb-2 text-body-secondary">${estudianteConCalificacionMasBaja["calificacion"]}</h3>
                </div>
            </div>
        </div>`;
        contenedor.append(div); 
    }else {
        contenedor.innerHTML = '';
        let div = document.createElement("div")
        div.innerHTML = `
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title mt-5">No hay ningun alumno cargado.</h2>
                </div>
            </div>
        </div>`;
        contenedor.append(div);
    }
});
botonCalcular.addEventListener("reset", (e) => {
    e.preventDefault();
    localStorage.clear();
    contenedor.innerHTML = '';
    Swal.fire({
        title: "Se borro con éxito.",
        icon: "success"
    });
});

