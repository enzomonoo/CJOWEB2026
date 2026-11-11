//Efeito 3D encontrado em https://codeshack.io/spatial-ui-hover-depth-card-js/
//Alterado para funcionar com o resto da página

const cartaoDisco = document.getElementById("disco-3D");
const discoInterno = document.querySelector(".disco-interno");

cartaoDisco.addEventListener("mousemove", function(e) {
  const rect = cartaoDisco.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * -15;
  const rotateY = ((x - centerX) / centerX) * 15;
  
  discoInterno.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
});

cartaoDisco.addEventListener("mouseleave", function() {
  discoInterno.style.transform = "rotateX(0deg) rotateY(0deg)";
  discoInterno.style.transition = "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)";
});

cartaoDisco.addEventListener("mouseenter", function() {
  discoInterno.style.transition = "transform 0.1s ease-out";
});