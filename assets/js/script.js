// nuit/jour
const modeSwitch = document.querySelector(".btn.mode-switch");
const body = document.body;

const clickSound = new Audio("assets/audio/click.wav");

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play().catch((error) => {
    console.error("Erreur lors de la lecture du son de clic :", error);
  });
}

let isModeSwitchClicked = false;

modeSwitch.addEventListener("click", (event) => {
  isModeSwitchClicked = true;

  playClickSound();

  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("mode", isDarkMode ? "dark" : "light");

  setTimeout(() => {
    isModeSwitchClicked = false;
  }, 100);
});

window.addEventListener("DOMContentLoaded", () => {
  const mode = localStorage.getItem("mode") || "light";
  if (mode === "dark") {
    body.classList.add("dark-mode");
  }
});

//menu burger
document.addEventListener("DOMContentLoaded", function () {
  const openBtns = document.querySelectorAll(".openBtn");
  const closeBtns = document.querySelectorAll(".closeBtn");
  const sidenav = document.querySelector("#mySidenav");
  const body = document.querySelector("body");

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sidenav.classList.add("active");
      body.classList.add("no-scroll");
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sidenav.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });

  const navLinks = document.querySelectorAll("#mySidenav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidenav.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });
});

// music player

const tracks = [
  { src: "assets/audio/song1.mp3", name: "Track 1" },
  { src: "assets/audio/song2.mp3", name: "Track 2" },
  { src: "assets/audio/song3.mp3", name: "Track 3" },
];

let currentTrackIndex = 0;
let audio = new Audio(tracks[currentTrackIndex].src);
let userInteracted = false;

function loadTrack(index) {
  audio.pause();
  currentTrackIndex = index;
  audio = new Audio(tracks[currentTrackIndex].src);
  audio.loop = true;
  audio.play();
  const playPauseBtn = document
    .getElementById("playPauseBtn")
    .querySelector("i");
  playPauseBtn.classList.remove("fa-play");
  playPauseBtn.classList.add("fa-pause");
}

function togglePlayPause() {
  const playPauseBtn = document.getElementById("playPauseBtn");
  const icon = playPauseBtn.querySelector("i");

  if (audio.paused) {
    audio.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    audio.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}

function previousTrack() {
  const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(newIndex);
}

function nextTrack() {
  const newIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(newIndex);
}
// carousel

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children);

  items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
