let cardSrc;
let quantidadeCartas
let vetor;
let  carta1 = null;
let carta2 = null;
let carta1Id = null;
let cartaString;


//novo conteudo
const jogos=["Marvel", "Vanguard"];
const quantidadeJogadores = [1,2,3,4];
const tabuleiros = ['4x4','6x6'];

let escolhas = {
  jogo: null,
  quantidade: null,
  tabuleiro: null
}

function gerarBotoes(){
  const jogo = document.querySelector(".tema-do-jogo div");
  const jogador = document.querySelector(".quantidade-jogadores div");
  const tabuleiro = document.querySelector(".tamanho-do-tabuleiro div");
  popula(jogo,jogos);
  popula(jogador,quantidadeJogadores);
  popula(tabuleiro,tabuleiros);
}

function popula(classe, arr){
  for(let i = 0; i < arr.length; i++){
    console.log('aqui');
    classe.innerHTML += `<button class="btn-opcao" onclick="selecionar(this,${i})"><span class="texto-btn" >${arr[i]}</span></button>`;
  }
}

function alteraEscolha(elemento,opt){
  const pai = elemento.parentNode.parentNode;
  console.log('tipo + ',typeof(opt));
  if(pai.classList.contains('tema-do-jogo')){
    escolhas.jogo = jogos[opt];
  }else if(pai.classList.contains('quantidade-jogadores')){
    escolhas.quantidade = quantidadeJogadores[opt];
  }else{
    escolhas.tabuleiro = tabuleiros[opt];
  }
  console.log(escolhas);
}

function alteraClasse(elemento,classe,opt){
  if(elemento.classList.contains(classe)){ 
    elemento.classList.remove(classe);
 }else{ 
   const filhos = elemento.parentNode.childNodes;
   filhos.forEach(element => {
      element.classList.remove('selecionado');
   });
   alteraEscolha(elemento,opt);
   elemento.classList.add(classe);
 }
}

function selecionar(elemento,opt){
alteraClasse(elemento,'selecionado',opt);
}

gerarBotoes();











/*function numeroCartas() {   
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
       /*estav dentro do if abaixo*/ /*const cartaVerso1 = document.querySelector(".cartas-verso .carta"+carta1Id);
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
        carta1Id = null;
      }
      //if(carta2 != null){}}
    }
  }else{
    cardSrc = null;
    carta1 = null;
    carta2 = null;
    carta1Id = null;
    cartaVerso.setAttribute('src', `./img/CardBack.jpg`);
  }
}
*/


