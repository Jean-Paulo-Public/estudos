// Aula sobre tipos de objetos e um array #08

// var nome = 'Jean Paulo';
// var email = 'JeanPauloRioPreto@Gmail.com';
// var idade = 23;

// Objeto pessoa
var pessoa = {
   nome: 'Jean Paulo Athanazio De Mei',
   email: 'jeanpauloriopreto@gmail.com',
   idade: 23 
};

var outraPessoa = {
    nome: 'Amanda',
    email: 'Amanda@gmail.com',
    idade: 24
 };

console.log(pessoa.nome);
console.log(pessoa.email);
console.log(pessoa.idade);

// Array é uma lista de coisas
var pessoas = [pessoa, outraPessoa];
pessoas.push('Erica Tavares');

console.log(pessoas);

console.log(pessoas[0].nome);
console.log(pessoas[1].nome);
console.log(pessoas[2]);