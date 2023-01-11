let cardSrc;
let quantidadeCartas
let vetor = [];
let  carta1 = null;
let carta2 = null;
let carta1Id = null;
let cartaString;

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

function populandoMosaico(listaCartas) {
  const mosaicoVerso = document.querySelector(".mosaico .cartas-verso");
  vetor = listaCartas.concat(listaCartas);
  vetor = vetor.sort((a,b) => Math.random()-0.5);
  for (let contador = 0; contador < vetor.length; contador++) {
    console.log(contador);
    mosaicoVerso.innerHTML += `<img class="carta carta${contador}" onclick="mudarVerso(${contador})" src="./img/CardBack.jpg" alt="A gata"></img>`;
  }
}

function mudarVerso(cardId) {
  const cartaVerso = document.querySelector(".cartas-verso .carta"+cardId);
  cardAtual = cartaVerso.attributes.getNamedItem('src');
  if(cardAtual !== cardSrc){
    cartaVerso.setAttribute('src', `./img/${vetor[cardId]}`);
    cartaString = cartaVerso.attributes.getNamedItem('src').value;
    cardSrc = cardAtual;
    console.log(carta1,carta2);
    if(carta1 === null){
      carta1 = cartaString;
      carta1Id = cardId;
    }else{
      if(carta1Id != cardId){
        carta2 = cartaString;
      }
    }
    if(carta2 != null){
      const cartaVerso1 = document.querySelector(".cartas-verso .carta"+carta1Id);
      if(carta1 == carta2){
        console.log("deu match");
       cartaVerso.classList.add("match");
       cartaVerso1.classList.add("match");
       cartaVerso.setAttribute('onclick','#');
       cartaVerso1.setAttribute('onclick','#');
      }else{
        setTimeout(() => {cartaVerso.setAttribute('src', `./img/CardBack.jpg`)},1000);
        setTimeout(() =>{cartaVerso1.setAttribute('src', `./img/CardBack.jpg`)},1000);
      }
      carta1 = null;
      carta2 = null;
    }
  }else{
    cardSrc = null;
    cartaVerso.setAttribute('src', `./img/CardBack.jpg`);
  }
}
