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

// Métodos e Propriedades
// Um Array possui diversos métodos e propriedades que podemos utilizar.

const listaDeTimes = [
  "Flamengo",
  "Vasco",
  "Botafogo",
  "Fluminense",
  "São Paulo",
  "Palmeiras",
  "Corinthians",
  "Santos",
  "Grêmio",
];

// pop
// O método pop() remove o último elemento de um array e retorna o elemento removido.
const ultimoTime = listaDeTimes.pop();
console.log("pop", ultimoTime);
console.log("Lista Atualizada", listaDeTimes);

// shift
// O método shift() remove o primeiro elemento de um array e retorna o elemento removido.
const primeiroTime = listaDeTimes.shift();
console.log("shift", primeiroTime);
console.log("Lista Atualizada", listaDeTimes);

// push
// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
listaDeTimes.push("Internacional");
console.log("push", listaDeTimes);

// Diferença entre array e array-like object
const links = document.querySelectorAll("nav a");
// Vai dar erro, pois não é um array
// const ultimoLink = links.pop();
// console.log(ultimoLink);

const arrayLinks = Array.from(links);
const ultimoLink = arrayLinks.pop();
console.log(ultimoLink);

// map
// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log("map", map1);

// filter
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const filterList = listaDeTimes.filter((time) => {
  return time === "Corinthians";
});

console.log("filter", filterList);

const somePares = array1.filter((numero) => {
  return numero % 2 === 0;
});

console.log("pares", somePares);

// reduce
// O método reduce() executa uma função reducer (fornecida por você) para cada membro do array, resultando num único valor de retorno.
const acumulador = array1.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log("acumulador", acumulador);

// find
// O método find() retorna o primeiro item de um array que satisfaz a condição passada.
const encontraTime = listaDeTimes.find((time) => {
  return time === "Santos";
});
console.log("encontrou", encontraTime);

const naoEncontraTime = listaDeTimes.find((time) => {
  return time === "Tabajara";
});
console.log("não encontrou", naoEncontraTime);

// includes
// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
const includes = listaDeTimes.includes("Santos");
console.log("includes", includes);
