// LAÇO NÚMERO "FOR"

// O PROBLEMA
const input = require('readline-sync')
// const nota1 = Number(input.question('Informe a nota 1: '))
// const nota2 = Number(input.question('Informe a nota 2: '))
// const nota3 = Number(input.question('Informe a nota 3: '))

// let media = (nota1 + nota2 + nota3) / 3

// ACUMULADOR

// let acumula = 0;

// acumula = acumula + 10;
// acumula += 10;
// acumula++;

// // Estrutura for

// for (let i = 8; i > 4; i--) {
//   console.log("Repetir", i);
// }
// console.clear();

// Resolvendo o problema

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
  nota = Number(input.question(`Informe a nota ${i}: `));

  soma = soma + nota;
}

console.log(`A média do aluno é ${soma/3}.`);
