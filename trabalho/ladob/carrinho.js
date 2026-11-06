const botaoAbrir = document.getElementById("botao-abrir");
const botaoFechar = document.getElementById("botao-fechar");
const sidebarCarrinho = document.getElementById("sidebar-carrinho");
const overlayCarrinho = document.getElementById("overlay-carrinho");

function toggleCarrinho() {
  sidebarCarrinho.classList.toggle("active");
  overlayCarrinho.classList.toggle("active");
}

botaoAbrir.addEventListener("click", toggleCarrinho);
botaoFechar.addEventListener("click", toggleCarrinho);
overlayCarrinho.addEventListener("click", toggleCarrinho);