//InnerHTML
let title = document.querySelector('#title');

title.innerHTML = "Testando a propriedade do INNERHTML";

console.log(title);

//TextContent
let subtitle = document.querySelector('.subtitle');

console.log(subtitle);

subtitle.textContent = "Testando o textContent";

diferenças
let exemplo = document.getElementById('textoHtml');

console.log(exemplo.innerHTML);
console.log(exemplo.innerText);
console.log(exemplo.textContent);

// ----Criando elementos----
let novoParagrafo = document.createElement('p');

console.log(novoParagrafo);

novoParagrafo.textContent = 'olá';

let texto2 = document.createTextNode('Este é o conteudo do novo paragrafo inserido');

console.log(texto2);

novoParagrafo.appendChild(texto2);

console.log(novoParagrafo);

let body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo);

// ---criar em elemento já existente----
let container = document.getElementById('container');

console.log(container);

let elementoCriado = document.createElement('span');
console.log(elementoCriado);

elementoCriado.appendChild(document.createTextNode('texto de span inserido'))

console.log(elementoCriado);

container.appendChild(elementoCriado);

// ----Removendo elementos-------------
// remover elemento filho
let container2 = document.querySelector('#container');

console.log(container2);

let paragrafoCriado = document.querySelector('#container p');

console.log(paragrafoCriado);

container2.removeChild(paragrafoCriado);

//removendo elemento 
let subtitle = document.querySelector('.subtitle');

console.log(subtitle);

subtitle.remove();

let divTeste = document.querySelector('#teste');

divTeste.classList = 'testando-div';

console.log(divTeste);

divTeste.remove();

// -----Trocando tags --------
let elementoH3 = document.createElement('h3');

console.log(elementoH3);

let texto = document.createTextNode('Este é o texto do H3 substituido');

elementoH3.appendChild(texto);

//selecionar o elemento que quero trocar
let elementoAtual = document.getElementById('title');

console.log(elementoAtual);

let pai = elementoAtual.parentNode;

//primeiro parametro é o novo elemento
//segundo parametro é o antigo elemento
pai.replaceChild(elementoH3, elementoAtual);

// ------Adicionando atributos-------
let botao = document.querySelector('#btn');

botao.setAttribute('disabled', 'disabled');
botao.setAttribute('style', 'background-color: green; color: white');

let subtitleAtributo = document.querySelector('.subtitle');
console.log(subtitleAtributo);

subtitleAtributo.setAttribute('id', 'titulo-2');

let lista = document.querySelector('#lista');

console.log(lista);

lista.removeAttribute('id');
//------alterando css-------------
let titulo4 = document.querySelector('#title');

titulo4.style.color = 'red';

titulo4.style.cssText = 'background-color: pink; font-size: 50px;'

//-----propriedades document------------
console.log(document);

console.log(document.body);
console.log(document.head);
console.log(document.links[0]);
console.log(document.URL);
console.log(document.title);

document.title = 'Aula 2'








