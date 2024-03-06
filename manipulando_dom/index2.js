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

let texto = document.createTextNode('Este é o conteudo do novo paragrafo inserido');

console.log(texto);

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

let body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo);
//criar em elmento já existente----
let container = document.getElementById('container');

console.log(container);

let elementoCriado = document.createElement('span');
console.log(elementoCriado);

elementoCriado.appendChild(document.createTextNode('texto de span inserido'))

console.log(elementoCriado);

container.appendChild(elementoCriado);

