let cardSrc;
let quantidadeCartas = 1;

let vetor;

function numeroCartas() {   
    let cardsArray = ["202.webp"];
    quantidadeCartas =  prompt("Informe a quantidade de pares entre 2-9");
  while((quantidadeCartas < 2 || quantidadeCartas > 9)){
        quantidadeCartas =  prompt("Informe o numero de cartas entre 4-9");
    }
    for(let contador = 1; contador < quantidadeCartas; contador++){
        cardsArray.push(`${contador}.webp`);
    }
    populandoMosaico(cardsArray);
}
numeroCartas();

function populandoMosaico(listaCartas) {
  const mosaicoVerso = document.querySelector(".mosaico .cartas-verso");
  vetor = listaCartas.concat(listaCartas);
  vetor = vetor.sort((a,b) => Math.random()-0.5);
  for (let contador = 0; contador < vetor.length; contador++) {
    console.log(contador);
    mosaicoVerso.innerHTML += `<img class="carta carta${contador}" onclick="mudarVerso(${contador})" src="./img/${vetor[contador]}" alt="A gata"></img>`;
  }
}
populandoMosaico();

function mudarVerso(cardId) {
  const cartaVerso = document.querySelector(".cartas-verso .carta"+cardId);
  cardAtual = cartaVerso.attributes.getNamedItem('src');
  if(cardAtual !== cardSrc){
    cartaVerso.setAttribute('src', `./img/${vetor[cardId]}`);
    cardSrc = cardAtual;
  }else{
    cardSrc = null;
    cartaVerso.setAttribute('src', `./img/CardBack.jpg`);
  }

}
