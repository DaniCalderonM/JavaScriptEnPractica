//Ejercicio 3
//Creamos las variables respectivas para seleccionar los elementos del HTML
//que necesitamos utilizar.
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const resultado = document.querySelector('.resultado');
const btnSuma = document.getElementById('btn-sumar');
const btnResta = document.getElementById('btn-restar');

//Creamos la funcion sumar, para realizar la suma de los dos
//valores ingresados por el usuario en el navegador.
function sumar() {
    const valor1sum = Number(valor1.value);
    const valor2sum = Number(valor2.value);
    const resultadoSuma = valor1sum + valor2sum;
    //Utilizamos textContent para actualizar el contenido
    //en el html y que nos muestre el resultado.
    resultado.textContent = resultadoSuma;
}

//Creamos la funcion restar, para realizar la resta de los dos
//valores ingresados por el usuario en el navegador.
function restar() {
    const valor1rest = Number(valor1.value);
    const valor2rest = Number(valor2.value);
    const resultadoResta = valor1rest - valor2rest;

    //Logica para mostrar 0 si el resultado es negativo.
    if (resultadoResta < 0) {
        //Utilizamos textContent para actualizar el contenido
        //en el html y que nos muestre el resultado.
        resultado.textContent = 0;
    } else {
        resultado.textContent = resultadoResta;
    }
}

//Creamos y programamos los .addEventListener para que cuando el usuario haga click
//en un boton segun su ID correspondiente, se active la funcion y realice
//el proceso de suma o resta segun corresponda.
//.addEventListener para la suma.
btnSuma.addEventListener('click', function () {
    sumar();
});

//.addEventListener para la resta.
btnResta.addEventListener('click', function () {
    restar();
});