//Ejercicio 2
//Creamos las variables respectivas para seleccionar los elementos del HTML
//que necesitamos utilizar.
const caja = document.getElementById('caja');
const rojo = document.getElementById('btn-1');
const naranjo = document.getElementById('btn-2');
const amarillo = document.getElementById('btn-3');
const verde = document.getElementById('btn-4');
const celeste = document.getElementById('btn-5');
const rosado = document.getElementById('btn-6');

//Creamos y programamos los .addEventListener para que cuando el usuario haga click
//en un boton segun su ID correspondiente, se active la funcion y este cambie el color de la
//"caja" mediante el style.backgroundColor y su color indicado.
//Cambia el color de la caja a rojo en formato hexadecimal.
rojo.addEventListener("click", function () {
        caja.style.backgroundColor = "#e53e3e";
});
//Cambia el color de la caja a naranjo en formato hexadecimal.
naranjo.addEventListener("click", function () {
        caja.style.backgroundColor = "#dd6b20";
});
//Cambia el color de la caja a amarillo en formato hexadecimal.
amarillo.addEventListener("click", function () {
        caja.style.backgroundColor = "#faf089";
});
//Cambia el color de la caja a verde en formato hexadecimal.
verde.addEventListener("click", function () {
        caja.style.backgroundColor = "#48bb78";
});
//Cambia el color de la caja a celeste en formato hexadecimal.
celeste.addEventListener("click", function () {
        caja.style.backgroundColor = "#81e6d9";
});
//Cambia el color de la caja a rosado en formato hexadecimal.
rosado.addEventListener("click", function () {
        caja.style.backgroundColor = "#d53f8c";
});