// ================================================
// VICKSON'S STORE | EATERY & CATERING
// JavaScript | GSAP | ScrollTrigger
// ================================================


// 1. DARK MODE
const darkModeToggle = document.querySelector("#darkModeToggle");
const savedTheme = localStorage.getItem("vickson-theme");

// Restore the visitor's saved theme.
if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
}

// Update the dark mode button.
function updateThemeButton() {
    const isDark = document.documentElement.classList.contains("dark");

    darkModeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
    darkModeToggle.setAttribute("aria-pressed", String(isDark));
}

updateThemeButton();

// Toggle dark mode when clicked.
darkModeToggle.addEventListener("click", function () {
    const isDark = document.documentElement.classList.toggle("dark");

    localStorage.setItem("vickson-theme", isDark ? "dark" : "light");

    updateThemeButton();
});


// 2. GSAP INITIALIZATION
gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);


// 3. HERO INTRO TIMELINE
// Power3.out gives the entrance a smooth, natural finish.
const introTimeline = gsap.timeline({
    paused: true,

    defaults: {
        duration: 0.55,
        ease: "power3.out"
    }
});

introTimeline
    .from(".hero-eyebrow", {
        y: 25,
        opacity: 0
    })

    .from(".hero-title", {
        y: 40,
        opacity: 0
    }, "-=0.35")

    .from(".hero-copy", {
        y: 25,
        opacity: 0
    }, "-=0.35")

    .from(".hero-actions > *", {
        y: 20,
        opacity: 0,
        stagger: 0.15
    }, "-=0.25")

    .from(".hero-panel", {
        x: 40,
        opacity: 0,
        scale: 0.95
    }, "-=0.4");


// Keep the hero visible when reduced motion is preferred.
if (prefersReducedMotion.matches) {
    introTimeline.progress(1);
} else {
    introTimeline.play();
}


// 4. REPLAY INTRO BUTTON
const replayButton = document.querySelector("#replayBtn");

replayButton.addEventListener("click", function () {

    if (prefersReducedMotion.matches) {
        introTimeline.progress(1);
    } else {
        introTimeline.restart();
    }

});


// 5. SCROLLTRIGGER EFFECTS
const scrollAnimations = gsap.matchMedia();

scrollAnimations.add(
    "(prefers-reduced-motion: no-preference)",

    function () {

        // Reveal each section below the hero.
        gsap.utils.toArray(".reveal").forEach(function (section) {

            gsap.from(section, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

        });


        // Scroll progress bar.
        gsap.set("#scrollProgress", {
            scaleX: 0,
            transformOrigin: "left center"
        });

        gsap.to("#scrollProgress", {
            scaleX: 1,
            ease: "none",

            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });

    }
);


// 6. CONTACT FORM
// FRONT-END DEMO ONLY
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