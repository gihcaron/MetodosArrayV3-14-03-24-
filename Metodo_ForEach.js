// Metodo 1: ForEach 

// Utilidade: Ele é utilizado para percorrer item por item, mostrar sua posição e nos fornecer a informação do Array inteiro. 

//Sitaxe: array1.forEach((element) => console.log(element));

//Exemplo 1 - ForEach

// Declarar os números (Array) desejados

const numbers = [4, 8, 28, 32];

//Para cada núemro e index
//Exibir "O Numero é X e está na posição index"

 numbers.forEach((numbers, index) => {
  console.log(" O Numero é " + numbers + " e está na posição " + index);

});
