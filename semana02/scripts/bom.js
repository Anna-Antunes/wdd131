const input = document.querySelector('#capfav')
const botaoadd = document.querySelector('#botaoadd')
const list = document.querySelector('ul')
const botaoExcluir = document.createElement('button');

botaoadd.addEventListener('click', function() {
    // Código a ser executado quando o elemento for clicado
    if(input.value.trim() === '') {
    input.focus()
    }
    else{
    const li = document.createElement('li');
    const botaoExcluir = document.createElement('button');
    li.textContent = input.value;
    botaoExcluir.textContent = '❌'
    li.append(botaoExcluir)
    list.append(li);
    input.value = ''  
    input.focus();
    botaoExcluir.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();  
}
)
    }
});


    //TESTE 
/*function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;

}

let nome = nomeCompleto('Antonia', 'Francesca')
console.log(nome)*/


let notas = [100, 72, 83, 94, 88, 87];
let acumulador = 0;
let count = 0;
notas.forEach(nota => {
 if (nota > 87) {
 acumulador += nota;
 count ++;
 }
});
if ( count > 0 ) {
 console.log(acumulador/count); 
} else {
 console.log("Nenhuma nota informada.");
}
/*=94*/

/*const teste = document.querySelector('#teste');

let item = '<p>Eu gosto de macarrão!</p>'

teste.innerHTML = item;*/
