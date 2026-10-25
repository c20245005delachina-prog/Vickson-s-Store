// Welcome message
console.log("Welcome to Vickson's Store!");

// Explore Our Menu button
const menuButton = document.querySelector("#home button");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        document.querySelector("#menu").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Contact form
const contactForm = document.querySelector("#contact form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you for contacting Vickson's Store!");
        contactForm.reset();
    });
}