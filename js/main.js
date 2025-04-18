// Données pour le multilingue
const translations = {
    fr: {
        accueil: "Accueil",
        apropos: "À propos",
        services: "Services",
        contact: "Contact",
        hero_title: "Solutions Innovantes pour votre Entreprise",
        hero_subtitle: "Expertise, Innovation, Excellence",
        contact_btn: "Nous contacter",
        // Ajoutez d'autres traductions ici
    },
    en: {
        accueil: "Home",
        apropos: "About",
        services: "Services",
        contact: "Contact",
        hero_title: "Innovative Solutions for your Business",
        hero_subtitle: "Expertise, Innovation, Excellence",
        contact_btn: "Contact Us",
        // Ajoutez d'autres traductions ici
    }
};

// Gestion du changement de langue
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLang(lang);
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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.about-card, .service-card').forEach(card => {
        observer.observe(card);
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Ajoutez ici la logique d'envoi du formulaire
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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Observe tous les éléments à animer
    document.querySelectorAll('.service-card, .job-card, .hero-content').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
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

// Fonction de changement de langue
function changeLang(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}

// Animation smooth scroll pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 