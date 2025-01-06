// homepage.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Example feature: Dynamic Greeting Message
const headerElement = document.querySelector('header h1');
const now = new Date();
const hours = now.getHours();
let greeting;

if (hours < 12) {
    greeting = 'Good Morning!';
} else if (hours < 18) {
    greeting = 'Good Afternoon!';
} else {
    greeting = 'Good Evening!';
}

headerElement.textContent = `${greeting} Welcome to the Mental Health Platform`;

// Highlight the current section in the navigation
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
});
