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

let ListaDeNomes = ['Ana Clara', 'Beatriz', 'Carlos', 'Debora', 'Eduarda'];

ListaDeNomes.splice( 0, 1, 'Ana Beatriz');

console.log(ListaDeNomes);





