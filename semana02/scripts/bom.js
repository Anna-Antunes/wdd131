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

