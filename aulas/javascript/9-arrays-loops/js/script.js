// Array
// Um Array [] representa uma lista de dados.
// Para retornar um valor de um array, utilizamos o indice do valor.
// Começamos a contar do 0.

const frutas = ["Banana", "Maçã", "Morango", "Uva"];

const primeiraFruta = frutas[0];
console.log(primeiraFruta);

const segundaFruta = frutas[1];
console.log(segundaFruta);

const terceiraFruta = frutas[2];
console.log(terceiraFruta);

// etc...

// Loop
// for
// ELe é compostos por 3 partes:  inicialização, condição e incremento.
// Exempplo:
// for (declaração de uma variavel; condição; incremento) {}

let numero = 0;
numero = numero + 1;
numero = numero + 1;

numero += 1;

numero++;

console.log("soma", numero);

for (let index = 0; index <= 100; index++) {
  console.log("exemplo: ", index);
}

console.log(frutas.length);
for (let index = 0; index < frutas.length; index++) {
  console.log(frutas[index]);
}

const body = document.querySelector("body");
for (let index = 0; index < frutas.length; index++) {
  // body.innerHTML = `<li>TEST</li>`;
  body.innerHTML += `<li>${frutas[index]}</li>`;
}

// forEach
function imprimirFrutas(fruta) {
  console.log("forEach", fruta);
  body.innerHTML += `<li>${fruta} com forEach</li>`;
}

frutas.forEach(imprimirFrutas);
