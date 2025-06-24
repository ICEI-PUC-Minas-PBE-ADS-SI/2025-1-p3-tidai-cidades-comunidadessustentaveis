// Swiper inicialização
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// Redirecionamento inteligente dos botões principais
document.getElementById("btn-status").onclick = function () {
  if (!localStorage.getItem("usuarioLogado")) {
    localStorage.setItem("destinoAposLogin", "dashboard_usuario.html#meus-problemas");
    window.location.href = "login.html";
  } else {
    window.location.href = "dashboard_usuario.html#meus-problemas";
  }
};


document.getElementById("btn-registrar").onclick = function () {
  if (!localStorage.getItem("usuarioLogado")) {
    localStorage.setItem("destinoAposLogin", "dashboard_usuario.html#nova-ocorrencia");
    window.location.href = "login.html";
  } else {
    window.location.href = "dashboard_usuario.html#nova-ocorrencia";
  }
};
