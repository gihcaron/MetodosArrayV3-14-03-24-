// Método 11 - Array.prototype.flat()

//Utilidade: O Flat cria uma nova Array com todos os elementos de subArrays concatenados 

//Sintaxe: flat()

//Exemplo 1 -----------------------

//Determinar a Array e suas subarrays

let ListaDeNumeros = [1, [2,  [3, [ 4, [5, [6]]]  ]]  ];

//Igualar o resultado a lista de numeros pelo Flat, o numero 5 determina a profundidade das subArrays que ele deve regatar para criar a nova Array

let resultado = ListaDeNumeros.flat(5);

//Exibir o resultado da linha a cima

console.log(resultado); 

//Saida esperada: [ 1, 2, 3, 4, 5, 6 ]


// Exemplo 2 ----------------------------------------

let data = [01, [10, [2012]  ] ];

let res = data.flat(Infinity);

console.log(res);

