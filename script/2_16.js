//Desarrolla un programa con la lógica que desees donde expliques las diferencias de usar los operadores a++, a--, ++a y --a. Utiliza los comentarios de una y varias líneas en tu explicación.

let a = 10;

// Explicación del operador a++ (post-incremento):
// Primero devuelve el valor actual de 'a', que es 10, y luego incrementa 'a' en 1
console.log("El valor de a++ es: " + a++); // 10
console.log("El valor de 'a' después de a++ es: " + a); // 11

// Volvemos a inicializar la variable 'a' con un valor de 10
a = 10;

// Explicación del operador a-- (post-decremento):
// Primero devuelve el valor actual de 'a', que es 10, y luego decrementa 'a' en 1
console.log("El valor de a-- es: " + a--); // 10
console.log("El valor de 'a' después de a-- es: " + a); // 9

// Volvemos a inicializar la variable 'a' con un valor de 10
a = 10;

// Explicación del operador ++a (pre-incremento):
// Primero incrementa 'a' en 1, luego devuelve el nuevo valor de 'a'
console.log("El valor de ++a es: " + ++a); // 11
console.log("El valor de 'a' después de ++a es: " + a); // 11

// Volvemos a inicializar la variable 'a' con un valor de 10
a = 10;

// Explicación del operador --a (pre-decremento):
// Primero decrementa 'a' en 1, luego devuelve el nuevo valor de 'a'
console.log("El valor de --a es: " + --a); // 9
console.log("El valor de 'a' después de --a es: " + a); // 9
