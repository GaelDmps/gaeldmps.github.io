// Configuration des données de budget
const budgetData = {
    pizzas: {
        quantity: 3,
        pricePerUnit: 27,
        total: 0
    },
    courses: 60,
    totalGuests: 7
};

// Calcul automatique des totaux
function calculateBudget() {
    // Calcul du total des pizzas
    budgetData.pizzas.total = budgetData.pizzas.quantity * budgetData.pizzas.pricePerUnit;
    
    // Calcul du budget total
    const totalBudget = budgetData.pizzas.total + budgetData.courses;
    
    // Calcul du budget par personne
    const budgetPerPerson = totalBudget / budgetData.totalGuests;
    
    return {
        total: totalBudget,
        perPerson: budgetPerPerson
    };
}

// Mise à jour de l'affichage du budget
function updateBudgetDisplay() {
    const budget = calculateBudget();
    
    // Mise à jour du budget par personne
    const perPersonElement = document.getElementById('perPersonAmount');
    if (perPersonElement) {
        perPersonElement.textContent = `${budget.perPerson.toFixed(2)}€`;
    }
    
    // Mise à jour du budget total
    const totalElement = document.getElementById('totalAmount');
    if (totalElement) {
        totalElement.textContent = `${budget.total}€`;
    }
}

// Effet d'apparition des sections au scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observer toutes les sections
    const sections = document.querySelectorAll('.guests-section, .budget-section, .program-section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Effet de survol pour les cartes d'invités
function initGuestCardEffects() {
    const guestCards = document.querySelectorAll('.guest-card');
    
    guestCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Effet de lueur au survol
            this.style.boxShadow = '0 15px 35px rgba(255, 107, 0, 0.4), 0 0 20px rgba(126, 63, 242, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Retour à l'état normal
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        });
        
        // Effet de clic
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Animation de la timeline
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Effet de particules flottantes
function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);

    // Créer des particules flottantes
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, rgba(255, 107, 0, 0.6), transparent);
            border-radius: 50%;
            animation: floatParticle ${5 + Math.random() * 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        particleContainer.appendChild(particle);
    }

    // Ajouter l'animation CSS pour les particules
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(100vh) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Effet de lueur sur le titre principal
function initTitleGlowEffect() {
    const title = document.querySelector('.main-title');
    if (title) {
        title.addEventListener('mouseenter', function() {
            this.style.animation = 'glow 0.5s ease-in-out infinite alternate';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.animation = 'glow 2s ease-in-out infinite alternate';
        });
    }
}

// Animation de compteur pour les montants
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const range = end - start;
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Fonction d'easing pour un effet plus fluide
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = start + (range * easeOutQuart);
        
        element.textContent = `${current.toFixed(2)}€`;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Initialisation de l'animation des montants
function initBudgetAnimation() {
    const budget = calculateBudget();
    const perPersonElement = document.getElementById('perPersonAmount');
    const totalElement = document.getElementById('totalAmount');
    
    if (perPersonElement) {
        animateCounter(perPersonElement, 0, budget.perPerson, 2000);
    }
    
    if (totalElement) {
        animateCounter(totalElement, 0, budget.total, 1500);
    }
}

// Effet de frappe pour le sous-titre
function typeWriterEffect(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialisation de l'effet de frappe
function initTypeWriterEffect() {
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriterEffect(subtitle, originalText, 150);
    }
}

// Gestion des erreurs
function handleErrors() {
    window.addEventListener('error', function(e) {
        console.error('Erreur JavaScript:', e.error);
    });
}

// Fonction d'initialisation principale
function init() {
    try {
        // Initialisation des calculs de budget
        updateBudgetDisplay();
        
        // Initialisation des animations
        initScrollAnimations();
        initGuestCardEffects();
        initTimelineAnimations();
        initTitleGlowEffect();
        
        // Initialisation des effets visuels
        createFloatingParticles();
        initTypeWriterEffect();
        
        // Animation des montants avec délai
        setTimeout(() => {
            initBudgetAnimation();
        }, 1000);
        
        // Gestion des erreurs
        handleErrors();
        
        console.log('🎃 Site Halloween initialisé avec succès !');
        
    } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
    }
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', init);

// Recalculer le budget si la fenêtre est redimensionnée
window.addEventListener('resize', function() {
    // Petit délai pour éviter les calculs trop fréquents
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(updateBudgetDisplay, 250);
});

// Export des fonctions pour utilisation externe si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateBudget,
        updateBudgetDisplay,
        init
    };
}
