const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDark = body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
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
