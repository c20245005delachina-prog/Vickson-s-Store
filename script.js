// Welcome message
console.log("Welcome to Vickson's Store!");

// DARK MODE
const darkModeToggle = document.querySelector("#darkModeToggle");
const savedTheme = localStorage.getItem("vickson-theme");

// Restore the previously selected theme
if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
}

function updateThemeButton() {
    const isDark = document.documentElement.classList.contains("dark");

    darkModeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
    darkModeToggle.setAttribute("aria-pressed", String(isDark));
}

updateThemeButton();

darkModeToggle.addEventListener("click", function () {
    const isDark = document.documentElement.classList.toggle("dark");

    localStorage.setItem("vickson-theme", isDark ? "dark" : "light");
    updateThemeButton();
});

// EXPLORE MENU
const menuLink = document.querySelector('a[href="#menu"]');

if (menuLink) {
    menuLink.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelector("#menu").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

// CONTACT FORM - DEMO ONLY
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent =
            "Thank you for contacting Vickson's Store! This demo form does not send a real message.";

        formMessage.classList.remove("hidden");
        contactForm.reset();
    });
}