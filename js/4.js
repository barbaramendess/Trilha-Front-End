// Operadores booleanos

const numero = 10;

console.log(numero > 20);
console.log(numero == 10);

console.log(10 === '10'); // Sempre usar o '===' para não dar bug
console.log(10 == '10');

console.log(10 != 10);
console.log(10 !== '10'); // No diferente usar 2 iguais 

let idade = 23;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true; // Condição de AND (&&)
console.log('Posso dirigir?' , possoDirigir)

idade = 30; // Condição de OR (||)
const votoFacultativo = idade < 18 || idade >= 70
console.log(votoFacultativo)

const gostandoCurso = false; // ! < inverte o resultado
console.log(!gostandoCurso)
