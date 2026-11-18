const anoAtual = document.querySelector('#anoatual')
let data = new Date();
let ano = new Date().getFullYear();

anoAtual.innerHTML = ano;

const modificacao = document.querySelector('#ultimaModificacao');
modificacao.innerHTML = document.lastModified;

let temperatura = 17
let condicoes = "Ensolarado"
let vento = 6

let temperaturaElemento = document.querySelector('#temperatura')
let condicoesElemento = document.querySelector('#condicoes')
let ventoElemento = document.querySelector('#vento')
let sensacaoTermica = document.querySelector('#sensacaoTermica')

temperaturaElemento.textContent = `${temperatura} °C`
condicoesElemento.textContent = condicoes
ventoElemento.textContent = `${vento} km/h`

function calcularSensacaoTermica(temperatura, vento) {
    return 13.12 + 0.6215 * temperatura - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temperatura * Math.pow(vento, 0.16);
}

let resultadoSensacao;

if (temperatura <= 10 && vento > 4.8) {
    resultadoSensacao = calcularSensacaoTermica(temperatura, vento);
} else {
    resultadoSensacao = "N/A";
}

sensacaoTermica.textContent = `${resultadoSensacao} °C`;