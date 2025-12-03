"use strict"

let puodeliaiPakavimui = +prompt("puodelių skaičius, kuriuos reikia supakuoti: ");

const telpaPuodeliu = 3;

let pilnuDeziu = Math.floor(puodeliaiPakavimui / telpaPuodeliu);

let likoNesupakuoti = puodeliaiPakavimui - (telpaPuodeliu * pilnuDeziu);

console.log("Pilnų dėžių skaičius: " + pilnuDeziu);
console.log("Nesupakuotų puodelių: " + likoNesupakuoti);