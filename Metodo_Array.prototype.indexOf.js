// Metodo 3: Metodo_Array.prototype.indexOf

//Utilidade: O método Array.prototype.indexOf é utilizado para encontrar o indíce da primeira ocorrência de um elemento determinado em uma Array

//Sitaxe: indexOf(searchElement)
// indexOf(searchElement, fromIndex)

// Exemplo 1 ----------------------------

//Declarar a Array Escuderias de Formula 1
let EscuderiasF1 = ('Mercedes', 'Ferrari', 'McLaren', "RedBull", "Haas");

// Exibir se a escuderia "Williams" se encontrea na lista
console.log(EscuderiasF1.indexOf("Williams"));

//Saida Esperada: -1
//Justificativa: A Escuderia procurada existe na lista, logo sua posição é negativa, ou seja, não determinada numa Array. 

//Exemplo 2 ------------------------------------------
//Declarar a frase desejada
let frase = 'Longe se vai sonhando demais';

//Procurar uma string ("Vai") dentro de outra (frase)
//Exibir a string encontrada e sua posição
console.log(frase.indexOf("vai"));

//Saída esperada: 9
//Justificativa: O 9 é onde foi mencionada a palavra "Vai" pela primeira vez na Array (Frase)

