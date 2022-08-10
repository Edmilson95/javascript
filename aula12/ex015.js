var agora = new Date();
var diaSem = agora.getDay();

console.log(`Hoje é ${agora}, ou seja: `)
switch (diaSem) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda-feira')
        break;
    case 2:
        console.log('Terca-feira')
        break;
    case 3:
        console.log('Quarta-feira')
        break;
    case 4:
        console.log('Quinta-feira')
        break;
    case 5:
        console.log('Sexta-feira')
        break;
    case 6:
        console.log('Sábado')
        break;
    default:
        console.log('ERROOOOR! Dia inválido!')
        break;
}