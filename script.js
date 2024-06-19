document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('header nav');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Sticky header on scroll for all devices
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > header.offsetHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});
