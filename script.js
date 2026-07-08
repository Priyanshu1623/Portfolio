// 1. Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Mobile Menu Toggle (Hamburger Menu)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Link click karne par mobile menu close ho jaye
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});