let valores = [8, 1, 2, 6, 6, 3, 7]
valores.sort();
valores.push(10);

/*
for (let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}*/

for (let pos in valores){
    console.log(valores[pos])
}
