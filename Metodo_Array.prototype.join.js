// Metodo 5 : Array.prototype.join()

// Utilidade: Cria uma nova String de uma Array cancatenando todos os elementos dessa mesma Array.  

// Sitaxe: join()

// Exemplo 1 -------------------------------

// Declare a array desejada a cancatenar

let names = ["Maria Flor", "Raissa", "Theo", "Carla"];

// Determinar de qual forma ela irão se "unir"
// Forma definida = Através de ","
// Exibir os nomes agrupados  com as ","

console.log(names.join());

// Saída esperada: Maria Flor,Raissa,Theo,Carla

//Exemplo 2 -------------------------------

// Declare a array desejada 

let letras = ['G', 'I', 'O', 'V', 'A', 'N', 'N', 'A'];

// Determinar de qual forma ela irão se "unir"
// Méotodo decidido -  As letras irão se unir através de "-""
// // Exibir as letras agrupadas

console.log(letras.join('-'));

// Saída esperada: G-I-O-V-A-N-N-A
