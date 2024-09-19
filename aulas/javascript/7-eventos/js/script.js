// EVENTOS EM JAVASCRIPT
// UM EVENTO É UMA AÇÃO QUE OCORRE NO NAVEGADOR, COMO O CLIQQUE DE UM BOTÃO, O CARREGAMENTO DE UMA PÁGINA, ETC.

const ativar = document.querySelector(".ativar");
console.log(ativar);

/** @param {MouseEvent} event  */
function mensagem(event) {
  console.log("O botão foi clicado");
  console.log(event);
  console.log(event.timeStamp);
  console.log(event.x);
  console.log(event.y);
  console.log(event.currentTarget);
}

ativar.addEventListener("click", mensagem);

// INTEREÇÃO COM O USUÁRIO

const botao = document.querySelector(".botao");

function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("mostrar");
}

botao.addEventListener("click", mostrar);

// window
// O objeto window representa a janela do navegador. Ele contém propriedades e métodos para manipular a janela do navegador.
// Contem todo o dom
// Pode receber eventos globais

console.log(window);

const altura = window.innerHeight;
const largura = window.innerWidth;
console.log("altura", altura);
console.log("largura", largura);

function coordenadaMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}

window.addEventListener("mousemove", coordenadaMouse);

function scroll() {
  // Distancia do topo da pádina
  const scroll = window.scrollY;
  console.log(scroll);
}

window.addEventListener("scroll", scroll);
