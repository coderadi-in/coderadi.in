// ==================================================
// ELEMENT REFERENCE
// ==================================================

const loader = document.querySelector(".loader");

// ==================================================
// IMPORTS
// ==================================================

import { startSectionObserver } from './_animations.js';

// ==================================================
// FUNCTIONS
// ==================================================

// * FUNCTION TO HIDE THE LOADER AFTER 5 SECONDS
function hideLoader() {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        startSectionObserver();
    }, 6500);
}

// ==================================================
// EVENT LISTENERS
// ==================================================

document.addEventListener("DOMContentLoaded", hideLoader);