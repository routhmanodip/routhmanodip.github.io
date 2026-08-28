// ---- Dark / light theme toggle (remembers your choice) ----
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector(".theme-icon");

// Load saved theme, or fall back to the OS preference.
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (prefersDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(next);
  localStorage.setItem("theme", next);
});

function setTheme(mode) {
  root.setAttribute("data-theme", mode);
  icon.textContent = mode === "dark" ? "☀️" : "🌙";
}

// ---- Auto-update the footer year ----
document.getElementById("year").textContent = new Date().getFullYear();
