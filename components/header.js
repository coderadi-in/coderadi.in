// ==================================================
// ELEMENT REFERENCE
// ==================================================

const menuBtns = document.querySelectorAll(".menu-btn");
const navBar = document.querySelector('.nav');

// ==================================================
// FUNCTIONS
// ==================================================

// * FUNCTION TO TOGGLE THE NAVBAR
function toggleNavBar() {
    navBar.classList.toggle('active');
}

// ==================================================
// EVENT LISTENERS
// ==================================================

// & EVENT LISTENER FOR MENU-BTN CLICK
menuBtns.forEach((btn) => {
    btn.addEventListener('click', toggleNavBar);
});


// & EVENT LISTENERS TO CLOSE NAV WHEN BODY IS CLICKED
document.body.addEventListener('click', (e) => {
    if (navBar.classList.contains('active') && !e.target.closest('.nav') && !e.target.closest('.menu-btn')) {
        toggleNavBar();
    }
});