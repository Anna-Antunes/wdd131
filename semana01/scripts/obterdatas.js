const anoAtual = document.querySelector('#anoatual')
let data = new Date();
let ano = new Date().getFullYear();

anoAtual.innerHTML = ano;

const modificacao = document.querySelector('#ultimaModificacao');
modificacao.innerHTML = document.lastModified;