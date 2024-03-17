// Método 10: Array.prototype.reverse() 

// Utilidade: inverte um array no lugar. 
// O primeiro elemento do array agora se tornando o último, e o último elemento do array se tornando o primeiro.

//Sitaxe:reverse()

//Exemplo 1 ---------------------------

// Determine a Array frase

let frase = "Amo codar : ) "

//Armaenar em uma outra variável: --
// O igualar o resultado, divir a uma string vazia, aplicar o método reverse ao Array e depois juntar novamente os elementos dentro da String (com o Metodo Join) 

let resultado = frase.split('').reverse().join('');

//Exibir o resultado dessa nova variável 

console.log(resultado); 

//Saída esperada: ) : radoc omA 


//Exemplo 2 ------------------------------

// Determine a Array nome

let nome = ["Maria", "José"];

//Armazenar outra variável: --
//O igualar o resultado ao metodo reverse (a frase invertida)

let res = nome.reverse('');

//Exibir que o resultado é a variável "res"
console.log('Resultado', res);

//Saída esperada: Resultado [ 'José', 'Maria' ]