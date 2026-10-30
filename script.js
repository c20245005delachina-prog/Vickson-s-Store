// ================================================
// VICKSON'S STORE | EATERY & CATERING
// JavaScript | GSAP | ScrollTrigger
// ================================================


// ================================================
// 1. DARK MODE
// ================================================

const darkModeToggle = document.querySelector("#darkModeToggle");

const savedTheme = localStorage.getItem("vickson-theme");

// Restore saved theme
if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
}

// Update dark mode button
function updateThemeButton() {

    const isDark = document.documentElement.classList.contains("dark");

    darkModeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";

    darkModeToggle.setAttribute("aria-pressed", String(isDark));

}

// Initial button state
updateThemeButton();

// Toggle dark mode
darkModeToggle.addEventListener("click", function () {

    const isDark = document.documentElement.classList.toggle("dark");

    localStorage.setItem(
        "vickson-theme",
        isDark ? "dark" : "light"
    );

    updateThemeButton();

});

// ================================================
// 2. GSAP INITIALIZATION
// ================================================

gsap.registerPlugin(ScrollTrigger);

// Check visitor's motion preference
const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);


// ================================================
// 3. HERO PAGE-LOAD INTRO TIMELINE
// ================================================

// Power3.out creates a smooth and natural deceleration.
const introTimeline = gsap.timeline({

    paused: true,
    defaults: {
        duration: 0.55,
        ease: "power3.out"
    }

});


// Animation steps
introTimeline

    // Step 1: Hero eyebrow
    .from(".hero-eyebrow", {
        y: 25,
        opacity: 0
    })

    // Step 2: Main heading
    .from(".hero-title", {
        y: 40,
        opacity: 0
    }, "-=0.35")

    // Step 3: Hero description
    .from(".hero-copy", {
        y: 25,
        opacity: 0
    }, "-=0.35")

    // Step 4: Buttons with stagger
    .from(".hero-actions > *", {
        y: 20,
        opacity: 0,
        stagger: 0.15
    }, "-=0.25")

    // Step 5: Hero image/panel
    .from(".hero-panel", {
        x: 40,
        opacity: 0,
        scale: 0.95
    }, "-=0.4");


// Play intro animation
if (prefersReducedMotion.matches) {

    // Keep all content visible for reduced-motion users.
    introTimeline.progress(1);

} else {

    introTimeline.play();

}

// ================================================
// 4. REPLAY INTRO BUTTON
// ================================================

const replayButton = document.querySelector("#replayBtn");

replayButton.addEventListener("click", function () {

    if (prefersReducedMotion.matches) {

        introTimeline.progress(1);

    } else {

        // Restart the complete hero animation.
        introTimeline.restart();

    }

});

// ================================================
// 5. SCROLLTRIGGER ANIMATIONS
// ================================================

const scrollAnimations = gsap.matchMedia();

scrollAnimations.add(
    "(prefers-reduced-motion: no-preference)",
    function () {

        // ----------------------------------------
        // REVEAL EACH SECTION
        // ----------------------------------------

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

        // ----------------------------------------
        // SCROLL PROGRESS BAR
        // ----------------------------------------

        gsap.set("#scrollProgress", {
            scaleX: 0
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

// ================================================
// 6. CONTACT FORM - DEMO ONLY
// ================================================

const contactForm = document.querySelector("#contactForm");

const formMessage = document.querySelector("#formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Display confirmation message
        formMessage.textContent =
            "Thank you for contacting Vickson's Store! This demo form does not send a real message.";

        formMessage.classList.remove("hidden");
        // Clear form fields
        contactForm.reset();

    });

}

// ================================================
// END OF JAVASCRIPT
// ================================================
