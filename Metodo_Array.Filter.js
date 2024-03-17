// Metodo 12 -  Filter

//Utilidade:  cria uma cópia filtrada de uma parte de um determinado array 

//Sintaxe: 
//filter(callbackFn)
//filter(callbackFn, thisArg)

// Exemplo 1 ------------------------------------------

//Inseri alguns nomes aleatórios com algumas repetições propositais

let nomes = ['Ana', 'Pedro', 'Paulo', 'Ana', 'Noah', 'Pedro'];

// Igualei minha Array filtrada á:
// Os nomes pelo filtro que receberá a informação se o indice do Array original é o mesmo do indice do elemento 
// Tendo isso em vista, quando passar pelos nomes e não bater com a igualdade de indices, ele não vai filtrar
//Consequentemente, eliminando os nomes repetidos e restando apenas 1

//O index off é um outro método na qual está sendo utilizado para encontrar os elementos identicos ao index 

let ArrayFiltrada = nomes.filter((Element, index, Array) => Array.indexOf(Element) == index);

//Exibir a nossa nova Array com os nomes filtrados

console.log(ArrayFiltrada);

//Saída esperada: [ 'Ana', 'Pedro', 'Paulo', 'Noah' ]

//Exemplo 2 -------------------------------------------

//Inseri alguns núemros 

let numeros = [1, 18, 30, 60, 1000, 5000, 208, 603, 0];

// Desejo que filtre apenas os números maiores que 100

let NovaArray = numeros.filter(numeros => numeros > 100);

console.log(NovaArray);



