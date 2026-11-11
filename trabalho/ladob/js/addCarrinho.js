//Função do tutorial https://codeshack.io/animated-add-to-cart-button-js/
//Alterado para funcionar com o resto da pagina
const botaoCarrinho = document.querySelector(".botao-add-carrinho");

botaoCarrinho.addEventListener("click", () => {
  // Prevent multiple clicks
  if (botaoCarrinho.classList.contains("carrinho-carregando") || botaoCarrinho.classList.contains("carrinho-adcionado")) return;

  // 1. Start Loading
  botaoCarrinho.classList.add("carrinho-carregando");

  // Simulate API request (1.5s)
  setTimeout(() => {
    // 2. Success State
    botaoCarrinho.classList.remove("carrinho-carregando");
    botaoCarrinho.classList.add("carrinho-adcionado");

    // 3. Reset after 2.5s so user can add again
    setTimeout(() => {
      botaoCarrinho.classList.remove("carrinho-adcionado");
    }, 2500);
  }, 1500);
});