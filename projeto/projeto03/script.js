
function contagem() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');
    var n1 = Number(inicio.value);
    var n2 = Number(fim.value);
    var n3 = Number(passo.value);
    res.innerHTML = `Contando: <br>`

    if (inicio.value.length == 0 ||  Number(inicio.value < 0)) {
        alert('[ERRO] Algo deu errado! Preencha o campo de forma correta!')
        res.innerHTML = `Impossível contar!`
    } else if (fim.value.length == 0 || Number(fim.value) <= 0) {
        alert('[ERRO] Algo deu errado! Preencha o campo de forma correta')
        res.innerHTML = 'Impossível contar!'
    } else if (passo.value.length == 0 || Number(passo.value) <= 0) {
        alert('[ERRO] PASSO INVÁLIDO! O valor será reajustado para 1!')
        passo.value = 1;
        res.innerHTML = 'Tente novamente.'
    } else if (n1 < n2) {
        //contagem crescente
        for (var n1; n1 <= n2; n1 += n3) {
            res.innerHTML += `${n1} \u{1F449}`
        }
    } else {
        //contagem regressiva
        for (var n1; n1 >= n2; n1-= n3) {
            res.innerHTML += `${n1} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`


}