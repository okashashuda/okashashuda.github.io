// Typewriter Animation
var typed = new Typed(".typewriter", {
    strings: ["student", "data science enthusiast", "wanna-be software engineer", "sports fanatic"],
    typeSpeed: 75,
    backSpeed: 80,
    loop: true
})


// Navigation Bar + Dropdown Menu Active Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu-items ul li a, .dropdown-menu li a");

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove("active"));
        document.querySelectorAll(`.menu-items ul li a[href="#${sections[index].id}"], .dropdown-menu li a[href="#${sections[index].id}"]`).forEach((link) => link.classList.add("active"));
    }

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
});


// Dropdown Menu Open/Close Animation
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menuIconLogo = menuIcon.querySelector("i");
    const dropdown = document.querySelector(".dropdown-menu");
    const dropdownLinks = dropdown.querySelectorAll("a");

    menuIcon.addEventListener("click", function () {
        dropdown.classList.toggle("open");
        const isOpen = dropdown.classList.contains("open");

        menuIconLogo.className = isOpen
            ? "fa fa-close fa-xl"
            : "fa fa-bars fa-xl";
    });

    // auto-close when a link on the dropdown menu has been clicked
    dropdownLinks.forEach(link => {
        link.addEventListener("click", function () {
            dropdown.classList.remove("open");
            menuIconLogo.className = "fa fa-bars fa-xl"; //reset icon to menu
        });
    });
});


// Contact Form Reset Form Fields
window.onload = function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        // delay the reset to allow form submission to complete
        setTimeout(function() {
            form.reset();
        }, 100); // adjust the delay as needed
    });
};