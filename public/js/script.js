// ======================================================
// Bootstrap Form Validation
// ======================================================

(() => {

    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {

        form.addEventListener('submit', event => {

            if (!form.checkValidity()) {

                event.preventDefault();
                event.stopPropagation();

            }

            form.classList.add('was-validated');

        }, false);

    });

})();

// ======================================================
// Dark / Light Mode
// ======================================================

const toggle = document.getElementById("theme-toggle");

function updateIcon() {

    if (!toggle) return;

    if (document.body.classList.contains("dark-mode")) {

        toggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        toggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

}

// Load saved theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

}

updateIcon();

// Toggle theme

if (toggle) {

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode")
                ? "dark"
                : "light"
        );

        updateIcon();

    });

}
// ======================================
// Horizontal Slider
// ======================================

document.querySelectorAll(".location-section").forEach(section => {

    const slider = section.querySelector(".listing-slider");
    const button = section.querySelector(".scroll-right");

    button.addEventListener("click", () => {

        slider.scrollBy({

            left: 700,

            behavior: "smooth"

        });

    });

});