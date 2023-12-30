/*document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in effect to sections on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                section.classList.add('fade-in');
            }
        });
    });
});
*/

document.addEventListener('DOMContentLoaded', function () {
    // Function for smooth scrolling to navigation links
    const smoothScroll = function (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    };

    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });

    // Add fade-in effect to sections on scroll
    const sections = document.querySelectorAll('section');
    const teamMembers = document.querySelectorAll('.team-member');

    const addFadeInEffect = function (elements) {
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', function () {
        addFadeInEffect(sections);
        addFadeInEffect(teamMembers);
    });
});
