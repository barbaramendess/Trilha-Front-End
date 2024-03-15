// FUNÇÕES

// DEFINIÇÃO DA FUNÇÃO
function saudacao() {
  console.log("Seja bem vindo");
}

saudacao();

console.clear();

// COMO ENVIAR PARÂMETROS PARA AS FUNÇÕES
function saudacao(nome, curso = "Java e HTML") {
  console.log(`Seja bem vindo ${nome}, curso de ${curso}`);
}

saudacao("Babi");

console.clear();

// RETORNO DA FUNÇÃO
function soma(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = soma(10, 20);
console.log(resultado);

console.clear();

function maiorDoQue50(numero) {
  if (numero > 50) {
    return true;
  }
  return false;
}
