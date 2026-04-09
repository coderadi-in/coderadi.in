// ==================================================
// ELEMENT REFERENCE
// ==================================================

const sections = document.querySelectorAll(".section");

const heroElements = document.querySelectorAll(".hero .content > *");
const briefElements = document.querySelectorAll(".brief .section > *");
const workElements = document.querySelectorAll(".selected .section > *");
const trustElements = document.querySelectorAll(".trust .numbers .number");
const featuredElements = document.querySelectorAll(".featured .section > *");
const offerElements = document.querySelectorAll(".offers .section > *");

// ==================================================
// IMPORTS
// ==================================================

import { createIntersectionObserver, addTransitionDelay } from './_animations.js';

// ==================================================
// INTERSECTION OBSERVER FUNCTIONALITY
// ==================================================

const observer = createIntersectionObserver();
sections.forEach(section => observer.observe(section));

// ==================================================
// TRANSITION DELAY LOGIC
// ==================================================

addTransitionDelay(heroElements);
addTransitionDelay(briefElements);
addTransitionDelay(workElements);
addTransitionDelay(trustElements);
addTransitionDelay(featuredElements);
addTransitionDelay(offerElements);