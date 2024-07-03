let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    if (listaNumeros.length === numeroMaximo) {
        asignarTextoElemento("p", "Ya se han adivinado todos los números");
    } else {
        numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
        if (listaNumeros.includes(numeroSecreto)) {
            return generarNumeroSecreto();
        } else {
            listaNumeros.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        limpiarCaja();
    }
    intentos++;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    console.log(listaNumeros);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
