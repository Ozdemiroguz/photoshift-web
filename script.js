// Gallery Cleaner Swipe Photos — Marketing Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    const animatedElements = document.querySelectorAll('[data-animate]');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item.active').forEach(activeItem => {
                activeItem.classList.remove('active');
            });
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('#name')?.value || '';
            const email = contactForm.querySelector('#email')?.value || '';
            const subject = contactForm.querySelector('#subject')?.value || '';
            const message = contactForm.querySelector('#message')?.value || '';

            const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
            const mailtoLink = `mailto:7oughapps1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        });
    }

    // Hero swipe card — sync KEEP/DELETE overlays with the CSS animation cycle
    const swipeCard = document.getElementById('swipeCard');
    if (swipeCard) {
        const cycle = () => {
            swipeCard.classList.remove('show-keep', 'show-delete');
            setTimeout(() => swipeCard.classList.add('show-keep'), 600);
            setTimeout(() => swipeCard.classList.remove('show-keep'), 1700);
            setTimeout(() => swipeCard.classList.add('show-delete'), 2500);
            setTimeout(() => swipeCard.classList.remove('show-delete'), 3600);
        };
        cycle();
        setInterval(cycle, 4000);
    }

    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
