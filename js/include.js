document.addEventListener("DOMContentLoaded", function () {
  const includeElements = document.querySelectorAll("[data-include]");
  includeElements.forEach((el) => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then((res) => res.text())
      .then((data) => {
        el.innerHTML = data;
      });
  });
});
