function handleMouseEnter(){
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListernersToCards(){
    const cardElements = document.getElementsByClassName('s-card');

    for(let i = 0; i < cardElements.length; i++){
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter); // evento adicionado para quando o mouse estiver sobre
        card.addEventListener('mouseleave',handMouseLeave) // evento adicionado para quando o mouse for tirado de cima, para que saia o efeito do card

    }
}

/* 
Quando colocamos a tag script dentro do head do HTML, usamos esse evento para informar que primeiro deve ser ligo/carregado os elementos HTML, para depois realizar a leitura/carregamento a parte do script. */


document.addEventListener("DOMContentLoaded", addEventListernersToCards, false);




