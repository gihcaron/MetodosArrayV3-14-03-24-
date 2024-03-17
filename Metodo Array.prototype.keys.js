// Método 6: Array.prototype.keys()

// Utilidade: O método keys() em JavaScript retorna um novo objeto chamado Array Iterator que guarda as chaves para cada índice em um array. 

// Sitaxe: keys()

//Exemplo 1 ---------------------------------------

// Declarar uma constante (NumerosDaArray) e Array
const NumerosDaArray = [28, 4, 2008, 2, 8];

// Declarar o iterador de Array com os Numeros da Array
const interator = NumerosDaArray.keys(); 

// Exibir os indices correspondentes no Array
for (const key of interator) {
    console.log(key);
  }

  //Saída Esperada: 0
//1
//2
//3
//4



