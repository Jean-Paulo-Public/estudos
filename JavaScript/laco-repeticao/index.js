var listaDeConvidados = [];
listaDeConvidados.push('Acaciano');
listaDeConvidados.push('Rick');
listaDeConvidados.push('Amanda');
listaDeConvidados.push('Caio');

// console.log(listaDeConvidados[0]);

listaDeConvidados.forEach((nome, idx, teste) => {
    teste.push(idx);
    console.log(idx + ': ' + nome);
    console.log(teste);
});

/*
for(var i = 0; i < totalConvidados; i++){
    console.log('Indice: ' + i);
    console.log(listaDeConvidados[i]);
}

listaDeConvidados.forEach(nome => {

});

*/