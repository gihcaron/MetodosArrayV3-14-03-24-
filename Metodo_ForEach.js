// Metodo 1: ForEach 

// Utilidade: Ele é utilizado para percorrer item por item, mostrar sua posição e nos fornecer a informação do Array inteiro. 

//Sitaxe: array1.forEach((element) => console.log(element));

//Exemplo 1 - ForEach ----------------------------------------------------

// Declarar os números (Array) desejados

let numbers = [4, 8, 28, 32];

//Para cada núemro e index
//Exibir "O Numero é X e está na posição index"

numbers.forEach((numbers, index) => {
    console.log(" O Numero é " + numbers + " e está na posição " + index);

});

//Saida Esperada: O Numero é 4 e está na posição 0
//O Numero é 8 e está na posição 1
// O Numero é 28 e está na posição 2
//O Numero é 32 e está na posição 3

//------------------------------------------------------------------
//Exemplo 2 - ForEach: Como posso aplicar o ForEach na prática?

// Tenho uma lista de alunos e quero saber somente quem são os maiores de idade 

// Declarar a lista de alunos

let alunos = [
    { nome: "Beyonce", idade: "15", turma: "1TDS1" },
    { nome: "Luan Santana", idade: "18", turma: "M5B" },
    { nome: "Lady Gaga", idade: "19", turma: "3TEE" },
    { nome: "Justi Biber", idade: "17", turma: "2TAD" },

]

//Para cada aluno 
// Verificar se ele é maior de idade
//Se for, exibir "O aluno, x  posição index da turma x é maior de idade" 

alunos.forEach(function (item, index) {
    if (item.idade >= 18) {
        console.log('O aluno(a), ' + item.nome + '  posição ' + index + ' da turma ' + item.turma + ' é maior de idade');

    }
});

// Saida Esperada:
// O aluno(a), Luan Santana  posição 1 da turma M5B é maior de idade
//O aluno(a), Lady Gaga  posição 2 da turma 3TEE é maior de idade

