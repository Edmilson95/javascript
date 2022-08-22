let num = [5, 8, 4];
num[3] = 6;
num.push(7);
num.sort()

console.log(`Nosso vetor é ${num}`)

console.log(`O array tem ${num.length} posições`);//comprimento do array
console.log(num.sort());//arruma em ordem crescente os numeros do array

let pos = num.indexOf(1)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
console.log(`O valor 8 esta na posição ${pos}`)
}