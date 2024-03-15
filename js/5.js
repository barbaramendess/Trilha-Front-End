// COERÇÃO (CONVERSÃO) DE TIPOS

// 1 COERÇÃO EXPLÍCITA (MANUAL)

const num = 10;
console.log(num, typeof num);

const numeroEmFormatoDeString = String(num);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number("12304930"));
console.log(parseFloat("23233.323"));
console.log(parseInt('39230293'))
console.log(Boolean(1))

console.clear()

// Coerção Implícita (Automática)
console.log(10 + 1)
console.log('10' - 1)