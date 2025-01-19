let btn = document.querySelector(".scroll-up");

window.onscroll = function() {
    if (window.scrollY >= 600) {
        btn.style.display ="block";
    } else {
        btn.style.display ="none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};

// JavaScript to toggle the filter menu when the hamburger icon is clicked
const hamburgerMenu = document.querySelector('.hamburger-menu');
const filterHamburger = document.querySelector('.filter-hamburger');

// Toggle filter visibility when the hamburger menu is clicked
hamburgerMenu.addEventListener('click', () => {
    filterHamburger.classList.toggle('active'); // Toggle visibility of hamburger filter
    hamburgerMenu.classList.toggle('active');   // Animate the hamburger menu
});

// Filtering functionality for Hamburger Filter
document.querySelectorAll('.produce-filter .filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.dataset.filter; // Get the filter category from the button's data-filter attribute
        const products = document.querySelectorAll('.produces-fliter .box'); // Get all product boxes controlled by this filter

        // Show or hide products based on the filter selection
        products.forEach(product => {
            if (filterValue === 'all' || product.dataset.category === filterValue) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });

        // Optionally, close the filter menu after selection
        filterHamburger.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    });
});

// Filtering functionality for Second Filter (other filter on the page)
document.querySelectorAll('.state-filter .filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.dataset.filter; // Get the filter category from the button's data-filter attribute
        const products = document.querySelectorAll('.farms-boxs .box'); // Get all product boxes controlled by this filter

        // Show or hide products based on the filter selection
        products.forEach(product => {
            if (filterValue === 'all' || product.dataset.category === filterValue) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    });
});
