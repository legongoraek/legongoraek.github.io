// Revela el contenido de inmediato, antes que cualquier otra cosa en este
// script. Si algo más abajo lanza una excepción (p. ej. localStorage
// bloqueado por configuración de privacidad), el contenido ya es visible.
document.querySelectorAll(".fade-in").forEach(el => {
  el.classList.add("visible");
});

// localStorage puede lanzar (Safari con "Bloquear todas las cookies",
// modo privado en navegadores viejos, almacenamiento deshabilitado, etc.).
// Estos wrappers evitan que esos casos corten la ejecución del resto del script.
function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignorar: preferencia de tema/idioma simplemente no persiste.
  }
}

const toggle = document.getElementById("theme-toggle");
const body = document.body;

/* =====================
   MOBILE MENU
===================== */

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const menuBackdrop = document.getElementById("menu-backdrop");
const mainNavigation = document.getElementById("main-navigation");

function setMenuState(isOpen) {
  body.classList.toggle("menu-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
}

menuToggle?.addEventListener("click", () => setMenuState(true));
menuClose?.addEventListener("click", () => setMenuState(false));
menuBackdrop?.addEventListener("click", () => setMenuState(false));

mainNavigation?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") setMenuState(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) setMenuState(false);
});

// Cargar preferencia guardada
if (toggle && safeStorageGet("theme") === "dark") {
  body.classList.add("dark");
  toggle.innerHTML = '<i class="fas fa-sun"></i>';
}

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    safeStorageSet("theme", isDark ? "dark" : "light");
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
/* =====================
   LANGUAGE DETECTION
===================== */

const userLang = navigator.language || navigator.userLanguage;
const savedLang = safeStorageGet("lang");
const isEnglish = userLang.startsWith("en");
const currentPage = window.location.pathname;

// Si NO hay idioma guardado
if (!savedLang) {
  if (isEnglish && !currentPage.includes("en.html")) {
    safeStorageSet("lang", "en");
    window.location.href = "en.html";
  }

  if (!isEnglish && currentPage.includes("en.html")) {
    safeStorageSet("lang", "es");
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
