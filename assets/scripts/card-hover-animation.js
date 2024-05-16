function handleMouseEnter(){
    this.classList.add('s-card--hovered');
}

function addEventListernersToCards(){
    const cardElements = document.getElementsByClassName('s-card');

    for(let i = 0; i < cardElements.length; i++){
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);

    }
}

/* 
Quando colocamos a tag script dentro do head do HTML, usamos esse evento para informar que primeiro deve ser ligo/carregado os elementos HTML, para depois realizar a leitura/carregamento a parte do script. */


document.addEventListener("DOMContentLoaded", addEventListernersToCards, false);




