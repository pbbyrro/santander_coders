const input = require("readline-sync");

const numero_sorteado = 5;

let numero = Number(input.question("Qual número você escolhe?"));

while (numero !== numero_sorteado) {
    console.log("Você errou! Tente novamente...")

    numero = Number(input.question("Qual número você escolhe?"))
}

console.log("Você acertou!")