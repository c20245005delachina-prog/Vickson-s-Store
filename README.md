# Vickson's Store | Eatery & Catering

**Live site:**  https://c20245005delachina-prog.github.io/Vickson-s-Store/


## About

Vickson's Store is a website for a Filipino eatery and catering business. It introduces the store, displays Filipino food and prices, describes catering services, and provides a demo contact form for visitors.

## Design System

### Palette (60-30-10)

| Role | Share | Color | Used for |
|---|---|---|---|
| Dominant | 60% | `#FFF7ED` | Main page background |
| Secondary | 30% | `#FFFFFF` | Header, cards and form surfaces |
| Accent | 10% | `#EA580C` | Buttons, prices, links, and highlights |

### Visual style

**Style chosen:** Minimalism

**Why I chose it:** I chose minimalism keeps the website clean, organized, and easy to navigate. The warm cream background, white content surfaces, and orange accents create a friendly look that suits a neighborhood Filipino eatery.

### Contrast check

Body text color vs. background color: `#292524` on `#FFF7ED`

Contrast ratio: Approximately **14.29** (exceeds the WCAG AA requirement of 4.5:1 for normal text).
Tool used: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Features

- [x] Semantic HTML5 structure with header, navigation, main sections, and footer
- [x] Mobile-first responsive layout
- [x] Reusable Tailwind component classes using `@apply`
- [x] Dark mode toggle with saved browser preference
- [x] Filipino menu cards with descriptions and prices
- [x] Contact form with linked labels and required fields (front-end demo only)
- [x] GSAP page-load intro timeline with stagger and overlapping steps
- [x] Replay intro button
- [x] ScrollTrigger reveal animations for sections below the hero
- [x] Scroll progress bar with scrub
- [x] Reduced-motion support
- [x] Smooth scrolling and back-to-top link


## Built With

- HTML5, Tailwind CSS v4, JavaScript, GSAP 3.13.0 (planned for the next stage), ScrollTrigger 3.13.0 (planned for the next stage)