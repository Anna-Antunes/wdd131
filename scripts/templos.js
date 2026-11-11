const anoAtual = document.querySelector('#anoatual')
let data = new Date();
let ano = new Date().getFullYear();

anoAtual.innerHTML = ano;

const modificacao = document.querySelector('#ultimaModificacao');
modificacao.innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
