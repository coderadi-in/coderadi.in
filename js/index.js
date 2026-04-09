// ==================================================
// ELEMENT REFERENCE
// ==================================================

const sections = document.querySelectorAll(".section");
const loader = document.querySelector(".loader");

// ==================================================
// IMPORTS
// ==================================================

import { createIntersectionObserver } from './_animations.js';

// ==================================================
// INTERSECTION OBSERVER FUNCTIONALITY
// ==================================================

function startSectionObserver() {
    if (sections.length === 0) { return; }

    const observer = createIntersectionObserver();
    sections.forEach(section => observer.observe(section));
}

// * FUNCTION TO HIDE THE LOADER AFTER 5 SECONDS
function hideLoader() {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        startSectionObserver();
    }, 5000);
}

// ==================================================
// EVENT LISTENERS
// ==================================================

document.addEventListener("DOMContentLoaded", hideLoader);
