// function fazerTabuada(){
//     var tabuada = document.getElementById('tabuada').value;
//     var gerarTabuada = document.getElementById('gerarTabuada');
//     var res = document.getElementById('res');
//     var tabuadaDoNumero = Number(tabuada.value);
//     var vezes10 = Number(gerarTabuada.value);
//     var lista = document.getElementById('lista');

//     for (var c=1; c<=10; c++) {
//         var mult = Number(c) * tabuadaDoNumero;
//         res.innerText = `<li>${tabuadaDoNumero} x ${c} = ${mult}</li>`
//     }
// }
// var tabuadaDoNumero = 10
// var vezes10 = 0
// for (vezes10; vezes10 <= tabuadaDoNumero; vezes10++){
//     console.log(`${vezes10} vezes10 * ${tabuadaDoNumero} tabuadaDoNumero`)
// }
function tabuada(){
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1;
        tab.innerHTML = ``
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item);
            c++;
        }
    }
}