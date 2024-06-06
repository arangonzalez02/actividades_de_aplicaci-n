//Escribe un conversor de tiempo. El programa debe pedirle al usuario una cantidad de días, horas y minutos, y el programa devolverá la cantidad de segundos que son.


let dias = 0;
let horas = 0;
let minutos = 0;
let totalSegundos = 0;

document.getElementById("tiempoPara").addEventListener("calculo", function(event) {
    
    // Obtener los valores ingresados por el usuario usando valueAsNumber
    let dias = document.getElementById("dias").valueAsNumber;
    let horas = document.getElementById("horas").valueAsNumber;
    let minutos = document.getElementById("minutos").valueAsNumber;

    // Convertir todo a segundos
    let totalSegundos = (dias * 24 * 60 * 60) + (horas * 60 * 60) + (minutos * 60);

    // Mostrar el resultado
    document.getElementById("resultado").innerText = "Total en segundos: " + totalSegundos;
});