// 1. Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // Agar page 50px se jyada scroll hota hai, toh navbar me 'scrolled' class add kar do
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

// Click karne par menu open ya close hoga
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Phone par jab kisi link (jaise About, Skills) par click karein toh menu automatic close ho jaye
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});