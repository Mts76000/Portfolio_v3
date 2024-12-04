// Récupérer les éléments du DOM
const modeSwitch = document.querySelector(".btn.mode-switch");
const body = document.body;

// Basculer entre les modes jour et nuit
modeSwitch.addEventListener("click", () => {
  // Ajouter ou retirer la classe dark-mode
  body.classList.toggle("dark-mode");

  // Sauvegarder la préférence utilisateur dans le localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("mode", isDarkMode ? "dark" : "light");
});

// Charger la préférence du mode au démarrage
window.addEventListener("DOMContentLoaded", () => {
  const mode = localStorage.getItem("mode") || "light"; // Mode par défaut : jour
  if (mode === "dark") {
    body.classList.add("dark-mode");
  }
});
