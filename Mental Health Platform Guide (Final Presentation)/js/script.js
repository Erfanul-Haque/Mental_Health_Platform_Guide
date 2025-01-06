// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Offset for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active link while scrolling
    window.addEventListener('scroll', () => {
        let current = '';

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 60; // Adjust for fixed nav
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add click events to navigate to feature pages
    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('click', () => {
            const featureId = section.id;
            window.location.href = `${featureId}.html`;
        });
    });
});
