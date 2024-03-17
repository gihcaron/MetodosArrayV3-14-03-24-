// Metodo 8 - Array.prototype.slice()

// Utilidade: Utilizado para adicionar, remover ou substituir elementos em um array. 

//Sintaxe: array.splice(inicio, quantidade, elemento1, elemento2, ...);

//Exemplo 1 ----------------------------------------------------

//Iniciar array de Animais

let animais = ['Peixe', 'Foca', "Leão", 'Tubarão', 'Cobra'];

// Remover a "Foca" na posição 1 e adiconar "Gato" e "Cachorro" na Array

animais.splice(1, 1, "Gato", 'Cachorro');

// Exibir a nova Array com as mudanças 
console.log(animais);

//Saída esperada: 'Peixe', 'Gato', 'Cachorro', 'Leão', 'Tubarão', 'Cobra'



//Exemplo 2 ------------------------------------------------

//Declarar a um array para ListaDeNomes

let ListaDeNomes = ['Ana Clara', 'Beatriz', 'Carlos', 'Debora', 'Eduarda'];

//Neste cenário, tenho essa lista de nomes e inseri o nome errado
// O nome "Ana Clara" deveria ser "Ana Beatriz"
//Nesse contexto, removo a partir da posição 0 a posição 1, a Anna Clara, e adiciono a partir da Posição 0 o nome "Ana Beatriz" 

ListaDeNomes.splice(0, 1, 'Ana Beatriz');

//Exibo a nova lista de nomes com as novas alterações
console.log(ListaDeNomes);

// Saída esperada: 'Ana Beatriz', 'Beatriz', 'Carlos', 'Debora', 'Eduarda'





