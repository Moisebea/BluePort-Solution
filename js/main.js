// Gestion du changement de langue
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setGoogleTranslateLanguage(lang);
        });
    });

    // Remplaçons l'ancien gestionnaire de scroll par un nouveau qui garde le header transparent
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.style.background = 'transparent';
    });

    // Animation des cartes au scroll
    const observerOptions = {
        threshold: 0.1
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.about-card, .service-card').forEach(card => {
        cardObserver.observe(card);
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message envoyé !');
        });
    }

    // Gestion spécifique pour le logo (scroll vers le tout haut)
    document.querySelector('.scroll-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Garde le comportement existant pour les autres liens
    document.querySelectorAll('a[href^="#"]:not(.scroll-top)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation au défilement
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Observe tous les éléments à animer
    document.querySelectorAll('.service-card, .job-card, .hero-content').forEach(el => {
        el.classList.add('animate-on-scroll');
        scrollObserver.observe(el);
    });

    // Bouton retour en haut
    window.addEventListener('scroll', () => {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function setGoogleTranslateLanguage(lang) {
    const translateFrame = document.querySelector('iframe.goog-te-menu-frame');
    if (!translateFrame) {
        alert('Google Translate is not fully loaded yet. Please try again.');
        return;
    }

    const translateDoc = translateFrame.contentDocument || translateFrame.contentWindow.document;
    const langButtons = translateDoc.querySelectorAll('.goog-te-menu2-item span.text');

    langButtons.forEach(button => {
        if (button.innerText.toLowerCase().includes(lang)) {
            button.click();
        }
    });
}