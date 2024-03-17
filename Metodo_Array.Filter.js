// Metodo 12 -  Filter

//Utilidade:  cria uma cópia filtrada de uma parte de um determinado array 

//Sintaxe: 
//filter(callbackFn)
//filter(callbackFn, thisArg)

// Exemplo 1 ------------------------------------------

//Inseri alguns nomes aleatórios com algumas repetições propositais

let nomes = [ 'Ana', 'Pedro', 'Paulo', 'Ana', 'Noah', 'Pedro'];

// Igualei minha arrei filtrada á:
// Os nomes pelo filtro receberá a informação se o indice do Array original é o mesmo do indice do elemento 
// Tendo isso em vista, quando passar pelos nomes e não bater com a igualdade de indices ele não vai filtrar
//Consequentemente, eliminando os nomes repetidos

let ArrayFiltrada = nomes.filter((Element,index, Array)=> Array.indexOf(Element) == index);

console.log(ArrayFiltrada);

//Exemplo 2 -------------------------------------------