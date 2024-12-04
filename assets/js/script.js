// night mode
const modeSwitch = document.querySelector(".btn.mode-switch");
const body = document.body;

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("mode", isDarkMode ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const mode = localStorage.getItem("mode") || "light";
  if (mode === "dark") {
    body.classList.add("dark-mode");
  }
});

// menu burger

document.addEventListener("DOMContentLoaded", function () {
  const openBtns = document.querySelectorAll(".openBtn");
  const closeBtns = document.querySelectorAll(".closeBtn");
  const sidenav = document.querySelector("#mySidenav");
  const body = document.querySelector("body");

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sidenav.classList.add("active");
      body.classList.add("no-scroll"); // Ajouter la classe pour désactiver le défilement
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sidenav.classList.remove("active");
      body.classList.remove("no-scroll"); // Retirer la classe pour réactiver le défilement
    });
  });

  // Fermer le menu lorsqu'un lien est cliqué
  const navLinks = document.querySelectorAll(".sidenav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidenav.classList.remove("active");
      body.classList.remove("no-scroll"); // Retirer la classe pour réactiver le défilement
    });
  });
});
