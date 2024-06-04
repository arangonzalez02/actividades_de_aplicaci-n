//Escribe un programa que ponga en práctica la siguiente lógica:
// - Mostrará el siguiente menú y el usuario deberá elegir una de las opciones:
// a) Área del triángulo (b*h/2)    b) Área del recctángulo (b*h)   c) Área del círculo (pi*r**2)   d) Salir.
// - En función de la opción que elija el usuario, se le pedirán los datos necesarios en cada caso.
// - El programa calculará el resultado y lo mostrará en la consola.
// - La lógica anterior se repetirá indefinidamente hasta que el usuario pulse la tecla de salir.


let calculos;
let b=0;
let h=0;
let r=0;
let resultado=0;
let salida=0;


do{
calculos = Number (prompt("Elige una opción -> [1] Área del triángulo [2] Área del rectángulo [3] Área del círculo [4] Salir"));

switch (calculos) {
    case 1:{
        b = Number (prompt("Introduce la base del tríangulo"));
        h = Number (prompt("Introduce la altura del tríangulo"));

        resultado = (b*h/2);

        alert ("El resultado es " + resultado);
        
        break;}

        case 2:{
        b = Number (prompt("Introduce la base del rectángulo"));
        h = Number (prompt("Introduce la altura del rectángulo"));

        resultado = (b*h);

        alert ("El resultado es " + resultado);
        
        break;}


        case 3:{
        r = Number (prompt("Introduce el radio del círculo"));

        resultado = (Math.PI*r**2);

        alert ("El resultado es " + resultado);
        
        break;}

        case 4:{
        salida = 1;
        alert ("Abandona el programa");
        break;}



    default: alert ("Introduce un valor correcto")
        break;
}
} while (salida == 0);