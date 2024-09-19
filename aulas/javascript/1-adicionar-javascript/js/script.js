// const, let e var

// const é uma constante, ou seja, o valor não muda, não pode ser alterado
// let é uma variável que pode ser alterada
// var é uma variável que pode ser alterada, mas não é recomendado usar

// case sensitive = reconhece letras maiúsculas e minúsculas
// pascalcase = NomeComposto = Iniciar com letra maiúscula e cada palavra seguinte também
// camelCase = nomeComposto = Iniciar com letra minúscula e cada palavra seguinte com letra maiúscula
// snake_case = nome_composto = Letras minúsculas e separadas por underline

// Frontend = Vamos usar camelCase

const nome = "Allan";
console.log(nome);
// nome = "Patrick"; - Vai dar erro, pois não pode alterar o valor de uma constante

let outroNome = "Patrick";
outroNome = "Teste";
console.log(outroNome);
