//Crea un programa que muestre los números impares que no sean múltiplo de 3 ni de 7 que hay del 100 al 1. Realiza versiones del programa usando bucles while, do while y for.


//While
let a = 100; 
while (a >= 1) {  // Continuamos el bucle mientras a sea mayor o igual a 1
    // Verificamos si el número es impar y no es múltiplo de 3 ni de 7
    if (a % 2 !== 0 && a % 3 !== 0 && a % 7 !== 0) {
        console.log(a);  // Si cumple las condiciones, saldrá en la consola
    }
    a--;  // Decrementamos el contador
}


//Do while
let b = 100;
do {
    // Verificamos si el número es impar y no es múltiplo de 3 ni de 7
    if (b % 2 !== 0 && b % 3 !== 0 && b % 7 !== 0) {
        console.log(b);  // Si cumple las condiciones, saldrá en consola
    }
    b--;  // Decrementamos el contador
} while (b >= 1);  // Continuamos el bucle mientras b sea mayor o igual a 1



//For
for (let c = 100; c >= 1; c--) {  // Lo comenzamos en 100 y lo decrementamos en cada iteración
    // Verificamos si el número es impar y no es múltiplo de 3 ni de 7
    if (c % 2 !== 0 && c % 3 !== 0 && c % 7 !== 0) {
        console.log(c);  // Si cumple las condiciones, saldrá en consola
    }
}