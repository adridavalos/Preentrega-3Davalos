let formulario = document.getElementById("formulario");
let botonCalcular = document.getElementById("botonCalcular");

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

botonCalcular.addEventListener("submit", ()=>{
   // console.log(sessionStorage.getItem("alumnos"));
})