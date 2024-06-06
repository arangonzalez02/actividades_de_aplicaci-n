//Idea un programa en el que usar un bucle do while sea mejor idea que usar un bucle while.


let usuNum = 0;

do {
    usuNum = Number (prompt("Ingresa un número entre 1 y 10:"));
    
} while (usuNum < 1 || usuNum > 10);  // || ->  ESTO O ESTO

console.log("Número válido ingresado:", usuNum);



//Usar `do while` es adecuado aquí porque queremos que el mensaje de solicitud se muestre al menos una vez. Si usáramos un bucle `while`, tendríamos que inicializar el `let` con un valor que obligue a entrar al bucle, lo cual no sería tan claro.