function carregar() {
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundos = data.getSeconds();
    msg.innerHTML = `Agora são exatamente <strong>${hora}h${minuto}min${segundos}s</strong> horas.`
    if (hora >= 0 && hora <12){
       imagem.src = './img/manha.jpg.jpg' //BOM DIA!
       document.body.style.background = '#C99E8E'
    } else if (hora >=12 && hora < 18){
        imagem.src = './img/tarde.jpg.jpg'//BOA TARDE!!
        document.body.style.background = '#3D4749'
    } else {
       imagem.src = './img/noite.jpg.jpg' //Boa noite
       document.body.style.background = '#14212A'
    }
}