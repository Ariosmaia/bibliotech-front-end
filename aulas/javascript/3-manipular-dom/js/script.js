const nav = document.querySelector("nav");
console.log(nav);

// Se não encontrar o elemento, retorna null
// const autores = document.querySelector(".autor");
// console.log(autores);

const autores = document.querySelector(".autores a");
console.log(autores);

// O que posso fazer com o elemento selcionado?
// https://developer.mozilla.org/en-US/docs/Web/API/Element

console.log(autores.innerHTML);
console.log(autores.href);
autores.remove();

nav.style.backgroundColor = "red";
nav.style.padding = "20px";

nav.classList.add("ativo");

console.dir(nav);
