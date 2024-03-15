// Arrays > 

// Criar array

let arr = ['gato', 'meow', 'nya', true]

console.log(arr)

// Acessar dados do array - Primeiro elemento temo indice 0
console.log('Primeiro elemento:', arr[0])
console.log('Segundo elemento:', arr[1])
console.log('Terceiro elemento:', arr[2])

// Como obter o tamanho do array?
console.log('Tamanho do array: ', arr.length)
console.clear()
// Percorrer arrays

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.clear()

for (let i of arr) {
    console.log(i)
}
console.clear()
// Percorrer indices
for (let i in arr) {
    console.log(i, arr[i])
}