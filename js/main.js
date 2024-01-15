let formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //evito que se recargue el formulario

   let input1 = e.target.children[0].children[0].children[0]; //traigo los inputs del formulario
   let input2 = e.target.children[0].children[1].children[0]; 
   let input2Parse = parseInt(input2.children[1].value)

    if (input2Parse >0 && input2Parse <=10 && input1 != "") {
        let alumnos = []
        if (sessionStorage.getItem("alumnos") != null){
            alumnos = JSON.parse(sessionStorage.getItem("alumnos"))
        }
        alumnos.push({ nombre: input1.children[1].value, calificacion: input2Parse });
        sessionStorage.setItem("alumnos", JSON.stringify(alumnos));
        input1.children[1].value = "";
        input2.children[1].value = "";
        alert("Agregado");
    }else{
        if(input1 == ""){
            alert("Complete el campo Nombre");
        }else{
            alert("Ingrese una calificaciòn correcta");
            input2.children[1].value = "";
        }
    }
});

 //let nombre = localStorage.getItem("nombre");
// console.log(nombre);
// let valor = localStorage.getItem("valor");
// console.log(valor);
// let numero = localStorage.getItem("numero");
// console.log(numero);
// document.addEventListener('DOMContentLoaded', function () {
//     let formulario = document.getElementById("formulario");

//     formulario.addEventListener("submit", function (e) {
//         e.preventDefault();

//         let inputNombre = document.getElementById("inputNombre");
//         let inputCalificacion = document.getElementById("inputCalificacion");

//         // Verifica que los elementos existan antes de acceder a sus valores
//         if (inputNombre && inputCalificacion) {
//             let nombre = inputNombre.value;
//             let calificacion = parseFloat(inputCalificacion.value);

//             // Verifica que la calificación sea un número válido entre 1 y 10
//             if (!isNaN(calificacion) && calificacion >= 1 && calificacion <= 10) {
//                 console.log("Nombre: " + nombre);
//                 console.log("Calificación: " + calificacion);

//                 // Puedes realizar más operaciones o enviar los datos a un servidor aquí
//             } else {
//                 console.error("La calificación debe ser un número entre 1 y 10");
//             }
//         }
//     });
// });