let arrayA = []
let arrayB = []
let arrayC = []

for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 10)
    let z = Math.floor(Math.random() * 10)
    arrayA[i] = x
    arrayB[i] = z
}

var cont = 0
for (let i = 0; i < 10; i++) {
    if (arrayA[i] in arrayB && arrayA[i] > 5) {
        arrayC[cont] = arrayA[i]
        cont += 1
    }
}

for (let i = 0; i < 10; i++) {
    if (arrayB[i] in arrayA && arrayB[i] > 5) {
        arrayC[cont] = arrayB[i]
        cont += 1
    }
}

console.log(cont)
console.log(arrayA)
console.log(arrayB)
console.log(arrayC)