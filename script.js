// Pesan sambutan
window.addEventListener("load", () => {
  alert("Selamat datang di profil oranye saya! 🔥 — Diandra Abyan Zahran");
});

// Efek muncul saat scroll
const fadeElements = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Efek mengetik di teks header
const typingText = document.getElementById("typing-text");
const originalText = typingText.innerText;
typingText.innerText = "";

let i = 0;
function typeEffect() {
  if (i < originalText.length) {
    typingText.innerHTML += originalText.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
window.onload = typeEffect;
