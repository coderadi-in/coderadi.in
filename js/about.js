// ==================================================
// ELEMENT REFERENCE
// ==================================================

const ageElem = document.getElementById("age");

// ==================================================
// EVENT LISTENERS
// ==================================================

// & EVENT LISTENER TO FILL THE AGE ELEMENT
document.addEventListener("DOMContentLoaded", () => {
    const birthDate = new Date("2007-08-31");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    ageElem.textContent = age;
});