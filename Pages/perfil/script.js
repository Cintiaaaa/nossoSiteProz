document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const perfil = document.getElementById("perfil");
  const dropdown = document.querySelector(".dropdown");
  const carperfils = document.querySelectorAll(".carperfil");
  const openChat = document.getElementById("open-chat");
  const chat = document.getElementById("chat");
  const closeChat = document.getElementById("close-chat");

  let perfilIndex = 0;

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  perfil.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });

  function mostrarPerfil(index) {
    carperfils.forEach((perfil, i) => {
      perfil.style.display = i === index ? "block" : "none";
    });
  }

  function avaliarPerfil() {
    perfilIndex = (perfilIndex < carperfils.length - 1) ? perfilIndex + 1 : 0;
    mostrarPerfil(perfilIndex);
  }

  document.querySelectorAll(".btn-like, .btn-dislike").forEach(button => {
    button.addEventListener("click", () => {
      const botoes = button.parentElement;
      botoes.style.display = "none";
      setTimeout(() => {
        avaliarPerfil();
        botoes.style.display = "flex";
      }, 500);
    });
  });

  mostrarPerfil(perfilIndex);

  openChat.addEventListener("click", () => {
    chat.style.display = "flex";
    openChat.style.display = "none";
  });

  closeChat.addEventListener("click", () => {
    chat.style.display = "none";
    openChat.style.display = "block";
  });
});
