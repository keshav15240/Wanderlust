// ======================================================
// Bootstrap Form Validation
// ======================================================

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    });
  });
})();

// ======================================================
// Dark / Light Mode
// ======================================================

const themeToggle = document.getElementById("theme-toggle");

const updateThemeIcon = () => {
  if (!themeToggle) return;

  themeToggle.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
};

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

updateThemeIcon();

// Toggle Theme
themeToggle?.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  updateThemeIcon();
});

// ======================================================
// Horizontal Listing Slider
// ======================================================

document.querySelectorAll(".location-section").forEach((section) => {
  const slider = section.querySelector(".listing-slider");
  const scrollButton = section.querySelector(".scroll-right");

  if (!slider || !scrollButton) return;

  scrollButton.addEventListener("click", () => {
    slider.scrollBy({
      left: 700,
      behavior: "smooth",
    });
  });
});