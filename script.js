// Menu Icon Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    let icon = menuIcon.querySelector('i');
    icon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Sections Active Link & Sticky Navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

window.onscroll = () => {
    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Active link highlighting
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Remove menu icon toggle and navbar when scrolling (for mobile)
    let icon = menuIcon.querySelector('i');
    icon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Theme Toggle (Dark / Light Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlTag = document.documentElement;

// Check local storage for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlTag.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggleBtn.addEventListener('click', () => {
    let newTheme = htmlTag.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    
    htmlTag.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeToggleBtn.classList.remove('bx-moon');
        themeToggleBtn.classList.add('bx-sun');
    } else {
        themeToggleBtn.classList.remove('bx-sun');
        themeToggleBtn.classList.add('bx-moon');
    }
}

// Contact Form Basic Validation/Alert
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! Your message has been simulated as sent.');
        contactForm.reset();
    });
}

// Scroll Reveal Animations
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .timeline, .projects-container, .education-container, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .contact-info', { origin: 'right' });