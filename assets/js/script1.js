//Ejercicio 1
//Asignamos el formulario del html a la variable form con getElementById.
let form = document.getElementById("formulario");

//Bloque declaracion de funciones que seran llamadas desde la funcion del evento submit.

//Funcion que blanquea o limpia la linea de error y los campos, utilizando querySelector.
function limpiarErrores_y_Datos() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

//Funcion que nos entrega el mensaje de exito.
function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito!!!";
};

//Funcion que valida los datos del formulario para que solo acepte lo que nos pide
//el desafio, es decir, solo caracteres de la a-z-A-z, si no, mandara un mensaje de
//error y no dejara "enviar" los datos ingresados.
function validar(nombre, asunto, mensaje) {
    //Inicializa el interruptor para validacion true o false.
    let pasamosLaValidacion = true;
    //Patron para solo aceptar letras y espacios.
    let validacionNombre = /^[a-zA-Z\s]+$/;
    //Logica para enviar mensaje de error si el resultado es "false".
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido."
        //Cambia el interruptor de la validacion.
        pasamosLaValidacion = false;
    };
    //Patron para solo aceptar letras y espacios.
    let validacionAsunto = /^[a-zA-Z\s]+$/;
    //Logica para enviar mensaje de error si el resultado es "false".
    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido."
        //Cambia el interruptor de la validacion.
        pasamosLaValidacion = false;
    };
    //Patron para solo aceptar letras y espacios.
    let validacionMensaje = /^[a-zA-Z\s]+$/;
    //Logica para enviar mensaje de error si el resultado es "false".
    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido."
        //Cambia el interruptor de la validacion.
        pasamosLaValidacion = false;
    };
    //Retorna este valor por tanto su contenido sale de la funcion.
    return pasamosLaValidacion;
};


//Evaluamos el evento submit en la variable del formulario, se ejecuta la funcion interna.
form.addEventListener("submit", function (event) {
    //Con .preventDefault evitamos el comportamiento por defecto del formulario.
    event.preventDefault();
    limpiarErrores_y_Datos();

    //Tomamos los valores ingresados en cada input del formulario.
    let nombre = document.querySelector("#nombre").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;

    //Llamamos a la funcion validar para evaluar los 3 campos del formulario.
    let resultado = validar(nombre, asunto, mensaje);

    //Evaluamos el valor o resultado devuelto por la funcion validar.
    if (resultado == true) {
        //La funcion solo es llamada si resultado es true.
        exito();
    };

});