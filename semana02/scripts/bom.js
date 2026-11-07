const input = document.querySelector('#capfav')
const botao = document.querySelector('button')
const list = document.querySelector('ul')
const li = document.createElement('li');
const botaoExcluir = document.createElement('button');
li.textContent = input.value;
botaoExcluir.textContent = '❌'
li.append(botaoExcluir)
list.append(li);