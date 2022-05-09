var express = require('express');
var server = express();

server.get('/products', (req, res) => {
    var nome = req.query.nome;
    return res.json({ok: true, message: "buscando produtos no sistema usando Query Params: " + nome});
})

server.get('/users', (req, res) => {
    return res.json({ok: true, message: "buscando todos os usuários no sistema"});
})

server.get('/users/:id', (req, res) => {
    var nome = req.params.id;

    return res.json({ok: true, message: "buscando o usuário no sistema usando Rout Params: " + nome});
})

server.get('/clients/:id', (req, res) => {
    var codigo = req.params.id;
    var sexo = req.query.sexo;

    return res.json({ok: true, message: "buscando o cliente no sistema com o código: " + codigo + ' e Sexo: ' + sexo});
})

server.listen(3000);
console.log('Servidor rodando na porta 3000!');