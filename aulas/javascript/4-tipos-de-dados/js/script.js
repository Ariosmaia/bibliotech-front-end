// Tipos de dados em JavaScript

// String - 'abc', "abc", `abc`
// Number - 1, 2 , 3, 4, 5, 0.4
// Object - { }
// Array - [ ]
// Boolean - true, false
// Null/Undefined - null, undefined

// STRING
const question = "Qual o melhor time do mundo?";
const answer = "O melhor time é o Corinthians!";

// Concatenação de strings
console.log(question + " " + answer);
console.log(`${question} ${answer}`);

// NUMBER
let total = 0;

console.log("valor inicial:", total);

const compras = 30;
const imposto = 10;

// Expressões matermáticas
total = compras + imposto;
console.log("valor total:", total);

total = total * 2;
console.log("dobro do valor total:", total);

total = total / 2;
console.log("metade do valor total:", total);

total = total - 40;
console.log("valor total menos 20:", total);

// E se o Patrick enviar da API um numero em formato de string?
console.log("10" + "10");
console.log("10" + 10);

const transformarEmNumero = Number("10") + 10;
console.log(transformarEmNumero);

// E decimal?
// console.log(10.5); - com virgula não funciona

console.log("decimal:", 10.5);
