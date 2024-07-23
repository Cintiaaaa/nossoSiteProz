document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const perfil = document.getElementById("perfil");
    const dropdown = document.querySelector(".dropdown");
    const carperfils = document.querySelectorAll(".carperfil");
    const btnAnterior = document.getElementById("btn-anterior");
    const btnProximo = document.getElementById("btn-proximo");
    const openChat = document.getElementById("open-chat");
    const chat = document.getElementById("chat");
    const closeChat = document.getElementById("close-chat");
    const btnLikes = document.querySelectorAll(".btn-like");
    const btnDislikes = document.querySelectorAll(".btn-dislike");
  
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
  
    btnAnterior.addEventListener("click", () => {
      perfilIndex = (perfilIndex > 0) ? perfilIndex - 1 : carperfils.length - 1;
      mostrarPerfil(perfilIndex);
    });
  
    btnProximo.addEventListener("click", () => {
      perfilIndex = (perfilIndex < carperfils.length - 1) ? perfilIndex + 1 : 0;
      mostrarPerfil(perfilIndex);
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
  
    // Manipuladores de eventos para botões de like e dislike
    btnLikes.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        handleButtonClick(btn, index);
      });
    });
  
    btnDislikes.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        handleButtonClick(btn, index);
      });
    });
  
    function handleButtonClick(btn, index) {
      const botoesContainer = btn.parentElement;
      botoesContainer.querySelectorAll("button").forEach(button => {
        if (button !== btn) {
          button.style.display = "none";
        }
      });
      btn.style.display = "inline-block";
      perfilIndex = (perfilIndex < carperfils.length - 1) ? perfilIndex + 1 : 0;
      mostrarPerfil(perfilIndex);
    }
  
    // Ocultar setas do carrossel
    btnAnterior.style.display = "none";
    btnProximo.style.display = "none";
  });
  