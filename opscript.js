/*Desafio 2 Js - Solicita al usuario datos y realiza operacionies sobre ellos bajo ciertas condiciones*/

var nombreDeUsuario = prompt ("Inserte su nickname:");
var edad = prompt ("Inserte su edad");
var soloGatitos = prompt ("¿Gato o Perro?");

function bienvenido (edad, soloGatitos) {
    if (edad >= 18 && soloGatitos == "Gato") {
 return ("Bienvenido! " + nombreDeUsuario + ", nosotros también amamos los gatos y te dejamos pasar.");
 } else if (edad >= 18 && soloGatitos == "Perro") {
     return ("¡Aceso Denegado! Perdón " + nombreDeUsuario + ", tratá una vez más pero cambiá tu gusto por los animales.");
 } else {
     return ("¡Volvé cuando seas un poco más grande! Saludos.") 
    }
}

var bienvenido2 = bienvenido (edad, soloGatitos);

console.log (bienvenido2);