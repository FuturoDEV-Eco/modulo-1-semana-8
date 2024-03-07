//evento click
function clique(){
    elementoBotao.style.backgroundColor = 'yellow';
}

let elementoBotao = document.getElementById('elemento');

elementoBotao.addEventListener('click', clique);

//evento double click
let cliqueDuplo = document.querySelector('.title')

cliqueDuplo.addEventListener('dblclick', function(){
    this.style.color = 'blue';

    console.log(this);
})

//evento mouse
let titulo = document.querySelector('.title');

titulo.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'yellow';
});

titulo.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'white';
});

//evento teclado
document.addEventListener('keyup', function(event){
    window.setTimeout(() =>{
        console.log('soltou a tecla');
    }, 5000);
});

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        console.log('clicou no enter');
    }
})
