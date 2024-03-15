// OBJETOS 

// COMO CRIAR UM OBJETO NO JAVASCRIPT?

let objeto = {
    nome: 'Babi',
    idade: 23,
    'altura-da-babi': 156,
}

console.log(objeto.nome)
console.log(objeto.idade)
console.log(objeto["altura-da-babi"])

// COMO ADICIONAR UM PAR CHAVE-VALOR?
objeto.peso = 42

console.log(objeto)

// COMO DELETAR UM PAR CHAVE-VALOR?
delete objeto["altura-da-babi"]

console.log(objeto)

console.clear()

// COMO PERCORRER

for (let chave in objeto) {
    console.log(chave)
}