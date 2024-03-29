// Metodo 2: Array.prototype.includes()

// Utilidade: É utilizado quando for preciso saber se o array ou objeto possui determinado valor ou elemento

// Sintaxe: includes(searchElement);
//includes(searchElement, fromIndex);

// Exemplo 1 ------------------------------------------

// Determinar a Array de cores 
let cores = ['Amarelo', 'Azul', 'Verde', 'Rosa'];

// Exibir e determinar (se é falso ou verdadeiro) se inclue a cor "Ciano" na lista 
console.log(cores.includes("Ciano"));

//Saída Esperada: Falso

// Exemplo 2 -------------------------------------

// Determinar e declarar a Array de alunos 
let alunos = [
    { nome: "Beyonce", idade: "15", turma: "1TDS1" },
    { nome: "Luan Santana", idade: "18", turma: "M5B" },
    { nome: "Lady Gaga", idade: "19", turma: "3TEE" },
    { nome: "Justi Biber", idade: "17", turma: "2TAD" },
    { nome: "Elon Musk", idade: "20", turma: "2TDS1" },
]

// Criar uma variável ("filteredUsers") que receberia essas pessoas filtrando se elas incluem um "on" em seu nome
//Exibir os nomes com "on" 
// Utilizei dois métodos em um (filter e includes), pois queria filtrar os alunos que incluem um "on" em seu nome

let filteredUsers = alunos.filter(a => a.nome.includes("on"));
console.log(filteredUsers);

// Saída esperada: { nome: 'Beyonce', idade: '15', turma: '1TDS1' },
// { nome: 'Elon Musk', idade: '20', turma: '2TDS1' },
