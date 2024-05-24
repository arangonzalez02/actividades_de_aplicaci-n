// Elabora una calculadora. El programa debe pedirle al usuario un número, después un símbolo (+,-,*,/,**,%) y después otro número. El programa debe mostrar por consola el resultado de la operación.

let num1, num2;
let simbolo, resultado;
let entradaCorrecta = true;

do {
    num1 = Number(prompt("Indica un número: "));
    num2 = Number(prompt("Indica el siguiente numero: "));

    simbolo = Number(prompt("¿Qué operación quieres? -> 1.[+] 2.[-] 3[*] 4[/] 5[**] 6[%]"));

    if(isNaN(num1) || isNaN(num2)){
        alert("Introduce números");
        entradaCorrecta = false;
    }else{
        switch (simbolo) {

            case 1: {
                resultado = num1 + num2;
                simbolo = "+";
                break;
            }
            case 2: {
                resultado = num1 - num2;
                simbolo = "-";
                break;
            }
            case 3: {
                resultado = num1 * num2;
                simbolo = "x";
                break;
            }
            case 4: {
                resultado = num1 / num2;
                simbolo = "/";
                break;
            }
            case 5: {
                resultado = num1 ** num2;
                simbolo = "**";
                break;
            }
            case 6: {
                resultado = num1 % num2;
                simbolo = "%";
                break;
            }
    
            default: alert("Introduzca un valor correcto") //si no es niguno de los casos, va al default siempre
        }
        alert(num1 + simbolo + num2 + "=" + resultado);
    }
    } while (entradaCorrecta != true);
