// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando pelo ID do título
const frase01 = document.getElementById("frase01");

// Selecionando pelo ID do título
const frase02 = document.getElementById("frase02");

// Selecionando pelo ID do título
const frase03 = document.getElementById("frase03");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Selecionando o botão que altera as frases
const changeFrasesBtn = document.getElementById("btn-mudar-frases");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

// Evento de clique para alterar o texto das frases
changeFrasesBtn.addEventListener("click", function () {
    frase01.textContent = "O botao 'Mudar as 3 frases' foi clicado;";
    frase02.textContent = "Chamou a funcao 'changeFrasesBtn';";
    frase03.textContent = "Que por sua vez, alterou estas 3 frases!";
  });