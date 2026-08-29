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

// ---- Mobile navigation menu ----
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

// Collapse the menu after tapping a link.
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  });
});

// ---- Auto-update the footer year ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- Show the page's last-modified date in the footer ----
const lastUpdatedEl = document.getElementById("last-updated");
if (lastUpdatedEl) {
  const d = new Date(document.lastModified);
  const pad = (n) => String(n).padStart(2, "0");
  lastUpdatedEl.textContent = `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;
}
