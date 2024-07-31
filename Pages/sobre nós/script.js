document.addEventListener("DOMContentLoaded", () => {
    const perfil = document.getElementById("perfil");
    const dropdown = document.querySelector(".dropdown");
  
    perfil.addEventListener("click", () => {
      dropdown.classList.toggle("active");
    });
  });