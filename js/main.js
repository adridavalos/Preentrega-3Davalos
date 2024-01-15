let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //evito que se recargue el formulario

   const input1 = e.target.children[0].children[0].children[0].children[1].value; //traigo los inputs del formulario
   const input2 = e.target.children[0].children[1].children[0].children[1].value; //traigo los inputs del formulario

    console.log(input1);
    console.log(input2);
//   // console.log(inputs[0].value);
//   // alert(inputs[1].value);

// //   if (inputs[1].value < 0 || inputs[1].value > 10 || inputs[1].value == ""                       ) {
// //     inputs[1].value = "";
// //     alert("El campo debe tener el 1-10");
// //   }else{
// //     inputs[0].value = "";
// //     inputs[1].value = "";
// //     alert("enviado");
// //   }
 });


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