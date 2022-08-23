
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function () {
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === "imagens/tartarugas-ninja.webp") {
        minhaImagem.setAttribute('src', 'imagens/firefox2.png');
    } else {
        minhaImagem.setAttribute('src', "imagens/tartarugas-ninja.webp");
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');


function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Olá ' + meuNome + ', seja bem-vindo!';
    }
  }

if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Olá ' + nomeGuardado + ', bem-vindo de volta!';
}

meuBotao.onclick = function() { defineNomeUsuario();
}
