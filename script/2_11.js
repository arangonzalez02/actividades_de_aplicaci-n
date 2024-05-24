//Escribe un fragmento de código donde se aprecie la diferencia de usar los tipos de variables let, var y const.

const IVA=10;
var numero=25;
var mensaje = "Mensaje fuera"; 
function mostrarMensaje2() { 
    let mensaje1 = "<br>Mensaje dentro del Bloque";
    document.write(mensaje1);
    let resultado=numero*IVA;
    console.log(resultado);
}
mostrarMensaje2();
document.write("<br>mensaje fuera->" + mensaje);
