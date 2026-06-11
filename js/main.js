const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Cargar preferencia guardada
if (toggle && localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // solo anima una vez
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0
  }
);
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("visible");
  });
});

/* =====================
   LANGUAGE DETECTION
===================== */

const userLang = navigator.language || navigator.userLanguage;
const savedLang = localStorage.getItem("lang");
const isEnglish = userLang.startsWith("en");
const currentPage = window.location.pathname;

// Si NO hay idioma guardado
if (!savedLang) {
  if (isEnglish && !currentPage.includes("en.html")) {
    localStorage.setItem("lang", "en");
    window.location.href = "en.html";
  }

  if (!isEnglish && currentPage.includes("en.html")) {
    localStorage.setItem("lang", "es");
    window.location.href = "index.html";
  }
}
// Track idioma activo
const currentLang = window.location.pathname.includes("en.html") ? "en" : "es";

if (typeof gtag === "function") {
  gtag("event", "language_view", {
    language: currentLang
  });
}

/* =====================
   NEW SITE BANNER
===================== */

const newSiteBanner = document.getElementById("new-site-banner");
const closeNewSiteBanner = document.getElementById("close-new-site-banner");

function hideNewSiteBanner() {
  if (!newSiteBanner) return;

  newSiteBanner.classList.add("hide");
  document.body.classList.remove("has-new-site-banner");

  setTimeout(() => {
    newSiteBanner.remove();
  }, 300);
}

if (newSiteBanner) {
  document.body.classList.add("has-new-site-banner");

  if (closeNewSiteBanner) {
    closeNewSiteBanner.addEventListener("click", hideNewSiteBanner);
  }

  setTimeout(hideNewSiteBanner, 8000);
}