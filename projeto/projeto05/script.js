// let num = document.getElementById('num');
// let adicionar = document.getElementById('adicionar');
// let numeros = [];
// let num1 = Number(num.value);
// let res = document.getElementById('res');

// function adicionar(){
//     if (num1.value.length == 0 || num1.value.length > 100) {
//         res.innerHTML = 'Digite com um número entre 1 e 100';
//     }
// }

let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Número inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    }
}