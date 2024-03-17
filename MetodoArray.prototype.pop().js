// Método 7 - Array.prototype.pop()

//ATENÇÃO: DESCONSIDERAR O MÉTODO POP POIS JÁ FOI EXPLICADO EM AULA 
//ESTAVA EM REUNIÃO COM OS REPRESENTANTES E NÃO SABIA QUE ESSE MÉTODO FOI UTILIZADO COMO EXEMPLO EM SALA 
// NESSE CONTEXTO, FIZ UM MÉTODO A MAIS 

// Utilizade: O Metodo Pop remove o último elemento de um array e retorna esse elemento.

// Sitaxe: pop()

// Exemplo 1 -----------------------------

// Definir array dos Melhores chocolates  
let MelhoresChocolates = ["Batom Garoto", "Caribe", "Alpino", "Prestigio", "Amandita"];

// Remover o último elemento (Amandita)
MelhoresChocolates.pop();

// Exibir novamente a constante sem o último elemento
console.log(MelhoresChocolates);

// Saída Esperada: [ 'Batom Garoto', 'Caribe', 'Alpino', 'Prestigio' ]

// Exemplo 2 ------------------------------
// Declarar a Array (Membros da Ilha)
let MembrosdaIlha = ["Giovanna", "Kevin", "Julia", "Evelyn", "Luiz"];

MembrosdaIlha.pop();

console.log(MembrosdaIlha);

// Saída esperada: [ 'Giovanna', 'Kevin', 'Julia', 'Evelyn' ]