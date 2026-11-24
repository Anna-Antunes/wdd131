const anoAtual = document.querySelector('#anoatual')
let data = new Date();
let ano = new Date().getFullYear();

const fotos = document.querySelector('.fotos')

anoAtual.innerHTML = ano;

const modificacao = document.querySelector('#ultimaModificacao');
modificacao.innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

function toggleActive(element){
document.querySelectorAll('a').forEach(link =>{
	link.classList.remove('active')
});
element.classList.add('active');
}





const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005-08-07",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888-05-21",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015-06-07",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020-05-02",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974-11-19",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986-01-10",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983-12-02",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

{
nomeDoTemplo: "Campinas, Brasil",
localizacao: "Campinas, Brasil",
consagracao: "2002-05-17",
area: 48100,
urlDaImagem:
"https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5206.jpg"

},

{
nomeDoTemplo: "Salvador, Brasil",
localizacao: "Salvador, Brasil",
consagracao: "2024-10-20",
area: 29963,
urlDaImagem:
"https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668.jpg"
},

{
nomeDoTemplo: "São Paulo, Brasil",
localizacao: "São Paulo, Brasil",
consagracao: "1978-10-30",
area: 59246,
urlDaImagem: 
"https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-76401.jpg"


}

]


function listaDeTemplos(templos) {
fotos.innerHTML = "";
templos.forEach(templo => {
let figure = document.createElement("figure") 
figure.classList.add("card")
let figcaption = document.createElement("figcaption")
let localizacao = document.createElement("p")
let consagracao = document.createElement("p")
let area = document.createElement("p")
let imagem = document.createElement("img")
let div = document.createElement("div")



figcaption.textContent = templo.nomeDoTemplo
localizacao.innerHTML = `<span>Localização:</span> ${templo.localizacao}`
consagracao.innerHTML = `<span>Dedicado:</span> ${templo.consagracao}`
area.innerHTML = `<span>Tamanho:</span> ${templo.area} sq ft`
imagem.setAttribute("src", templo.urlDaImagem);
imagem.setAttribute("alt", templo.nomeDoTemplo);
imagem.setAttribute("loading", "lazy")
imagem.setAttribute("width", "320");
imagem.setAttribute("height", "199");






fotos.appendChild(figure)
figure.appendChild(figcaption)
figure.appendChild(localizacao)
figure.appendChild(consagracao)
figure.appendChild(area)
div.appendChild(localizacao)
div.appendChild(consagracao)
div.appendChild(area)
figure.appendChild(div)
figure.appendChild(imagem)


});
}


document.querySelector('#all').addEventListener('click', () => {
toggleActive(document.querySelector('#all'))
listaDeTemplos(templos)
})

document.querySelector('#old').addEventListener('click', () => {
toggleActive(document.querySelector('#old'))
listaDeTemplos(templos.filter(templo => new Date (templo.consagracao) < new Date("1900-01-01")));
})

document.querySelector('#new').addEventListener('click', () => {
toggleActive(document.querySelector('#new'))
listaDeTemplos(templos.filter(templo => new Date (templo.consagracao) > new Date("2000-01-01")));
})

document.querySelector('#large').addEventListener('click', () => {
toggleActive(document.querySelector('#large'))
listaDeTemplos(templos.filter(templo => templo.area > 90000));
})

document.querySelector('#small').addEventListener('click', () => {
toggleActive(document.querySelector('#small'))
listaDeTemplos(templos.filter(templo => templo.area < 10000));
})