//Escribe un programa que le pida al usuario un número, y muestre en consola su factorial.

let num;

num = Number (prompt ("Introduce un número:"));

for (let i = num-1; i>=1 ; i--) {
    num = num * i;
}

alert(num);
