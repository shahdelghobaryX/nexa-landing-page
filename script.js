
// =========================
// 1. Dark / Light Theme
// =========================

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check if the user previously selected a theme
const savedTheme = localStorage.getItem("nexa-theme");

if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggle.textContent = "☀";
} else {
    themeToggle.textContent = "☾";
}

// Toggle theme when clicking the button
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀";
        localStorage.setItem("nexa-theme", "dark");
    } else {
        themeToggle.textContent = "☾";
        localStorage.setItem("nexa-theme", "light");
    }
});


// =========================
// 2. Mobile Navigation
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});
