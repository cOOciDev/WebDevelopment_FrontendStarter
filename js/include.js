// include.js
function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const response = await fetch(file);
    if (response.ok) {
      const content = await response.text();
      el.innerHTML = content;
      if (file === "header.html") {
        // Re-run theme script after loading header
        const themeBtn = document.getElementById("themeToggle");
        themeBtn?.addEventListener("click", toggleTheme);
      }
    }
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML();
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});
