//ativar links do menu//
const links = document.querySelectorAll(".header-menua");

function ativarLink(link){
    const url = location.href;
    const href = link.href;
    if (url.includes(href)){
        link.classList.add("ativo");
    }
  
}

links.forEach(ativarLink);

// ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }

  console.log(elemento);
}

parametros.forEach(ativarProduto);




//perguntas frequente//

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPerguntas(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");

  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);

  console.log(pergunta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPerguntas);
}

perguntas.forEach(eventosPerguntas);


// galeria de bicicletas //


const galeria = document.querySelectorAll(".bicicleta-imagem img");
const galeriaContainer = document.querySelector(".bicicleta-imagem");

function trocarImagem(event) {
    const img = event.currentTarget;

    const media = window.matchMedia("(min-width: 1000px)").matches;

    galeriaContainer.prepend(img);  

    if (media){
        
        console.log("Tela maior que 1000px");
    }
}

function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);


//animação//
if(window.SimpleAnime) {
    new SimpleAnime();
}