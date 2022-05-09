var express = require('express');
var server = express();

// Criando uma rota GET test
server.get('/test', (req, res) => {
    var data = {
        ok: true,
        message: 'Olá, jean paulo! Você está usando o VERBO GET API Test'
    }
    return res.json(data);
});

// Criando um servidor na porta 3000
server.listen(3000);
console.log('Criando o servidor, rodando na porta 3000.');