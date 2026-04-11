// ==================================================
// ELEMENT REFERENCE
// ==================================================

const categoryFilters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll(".project");

// ==================================================
// FUNCTIONS
// ==================================================

// * FUNCTION TO REMOVE `FL` CLASS FROM ALL FILTERS
function removeFilterClasses() {
    categoryFilters.forEach(filter => {
        filter.classList.remove('fl');
        filter.classList.add('ot');
    });
}

// * FUNCTION TO ADD `FL` CLASS TO THE CLICKED FILTER
function addFilterClass(filter) {
    filter.classList.remove('ot');
    filter.classList.add('fl');
}

// * FUNCTION TO MANAGE ALL PROJECTS
function manageProjects(category) {
    projects.forEach(project => {
        if (category === 'allProjects' || project.dataset.category === category) {
            project.classList.remove("hidden");
        } else {
            project.classList.add("hidden");
        }
    })
}

// ==================================================
// EVENT LISTENERS
// ==================================================

// & EVENT LISTENER FOR FILTER BUTTON CLICK
categoryFilters.forEach((filter) => {
    filter.addEventListener('click', () => {
        removeFilterClasses();
        addFilterClass(filter);
        manageProjects(filter.id);
    })
})