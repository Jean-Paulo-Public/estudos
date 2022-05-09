function ArrayAvg(myArray) {
    var i = 0, 
        somatorio = 0, 
        tamanhoArray = myArray.length;

    while (i < tamanhoArray)
        somatorio = somatorio + myArray[i++];

    return somatorio / tamanhoArray;
}

var nomeAluno = 'Jean Paulo';
var notasAlunos = [4, 5, 10];

console.log('Olá, ' + nomeAluno);

var mediaNota = ArrayAvg(notasAlunos);

console.log('Média: ' + mediaNota);

if(mediaNota >= 7)
  {
    console.log('Aprovado');
  }
else if (mediaNota >= 5)
  {
    console.log('Recuperação')
  }
else
  {
    console.log('Reprovado')
  }