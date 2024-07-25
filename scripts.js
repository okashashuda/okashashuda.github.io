// Typewriter Animation
var typed = new Typed(".typewriter", {
    strings: ["student", "data science enthusiast", "wanna-be software engineer", "sports fanatic"],
    typeSpeed: 75,
    backSpeed: 80,
    loop: true
})

// Navigation Bar Active Scroll Animation
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function changeActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
});

