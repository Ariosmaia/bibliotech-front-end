// Condicionais
// Podemos verficar se uma condição é verdadeira ou falsa e executar um bloco de código baseado nisso.

if (true) {
  console.log("É verdadeiro");
}

if (false) {
  console.log("É falso");
}

if (false) {
  console.log("É falso");
} else {
  console.log("Executa o else");
}

// true/false
// Podemos usar função Boolean para verificar se um valor é verdadeiro ou falso.

const condicao1 = Boolean(true);
console.log(condicao1);

const condicao2 = Boolean(false);
console.log(condicao2);

const condicao3 = Boolean(0);
console.log(condicao3);

const condicao4 = Boolean(1);
console.log(condicao4);

const condicao5 = Boolean(-100);
console.log(condicao5);

const condicao6 = Boolean("");
console.log(condicao6);

const condicao7 = Boolean(" ");
console.log(condicao7);

const condicao8 = Boolean(null);
console.log(condicao8);

const condicao9 = Boolean(undefined);
console.log(condicao9);

const condicao10 = document.querySelector("body");
console.log(Boolean(condicao10));

const condicao11 = document.querySelector("nav");
console.log(Boolean(condicao11));

if (condicao11) {
  condicao11.addEventListener("click");
}

// Operadores lógicos
// AND (&&) - Retorna true se ambos os operandos forem verdadeiros.
// OR (||) - Retorna true se um dos operandos for verdadeiro.

const elemento = document.querySelector("span");

if (elemento) {
  console.log("Existe");
}

if (elemento && document.querySelector("body")) {
  console.log("Operador AND");
}

if (elemento || document.querySelector("body")) {
  console.log("Operador OR");
}

// Operadores de comparação
// == Igualdade
// === Igualdade estrita
// != Diferente
// !== Diferente estrito
// > Maior que
// < Menor que
// >= Maior ou igual
// <= Menor ou igual

const exemplo = document.querySelector(".exemplo");
const texto = exemplo.innerText;
console.log(texto);

if (texto === "HTML") {
  console.log("É igual");
}

if (texto === "html") {
  console.log("É igual 2");
}

if (texto.toLowerCase() === "html") {
  console.log("É igual 3");
}

if (10 < 5) {
  console.log("É menor");
}

if (10 > 5) {
  console.log("É maior");
}

if (10 >= 10) {
  console.log("É maior ou igual");
}

if (10 >= 11) {
  console.log("É maior ou igual 2");
}

if (10 === "10") {
  console.log("É igual???");
}

// comparação fraca
if (10 == "10") {
  console.log("É igual???");
}

if (10 !== "10") {
  console.log("É diferente");
}

const valor = false;

if (!!valor) {
  console.log("É verdadeiro");
}

const dadosAPI = undefined;

const existeDados = !!dadosAPI;
const existeDados2 = Boolean(dadosAPI);

if (existeDados) {
  console.log("Existe dados");
}
