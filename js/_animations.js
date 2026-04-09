// ==================================================
// ELEMENT REFERENCE
// ==================================================

const links = document.querySelectorAll('.link, .ulink');

// ==================================================
// FUNCTIONS
// ==================================================

// * FUNCTION TO ADD CLICK ANIMATION IN A LINK WHEN CLICKED
function updateClickAnimation(link) {
    link.classList.add('anim-clicked');
    setTimeout(() => {
        link.classList.remove('anim-clicked');
    }, 500);
}

// * FUNCTION TO CREATE AN INTERSECTION OBSERVER
export function createIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2
    });
    return observer;
}

// * FUNCTION TO ADD INCREASING TRANSITION DELAY TO AN ARRAY ELEMENTS
export function addTransitionDelay(elements) {
    elements.forEach((element, index) => {
        const delay = index * 100;
        element.style.transitionDelay = `${delay}ms`;
    });
}

// ==================================================
// EVENT LISTENERS
// ==================================================

// & EVENT LISTENER FOR LINK CLICK
links.forEach((link) => {
    link.addEventListener('click', () => {
        updateClickAnimation(link);
    })
})