// Enhanced dark mode functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (window.scrollY > 100) {
        if (isDarkMode) {
            header.style.background = 'rgba(34, 34, 34, 0.98)';
            header.style.boxShadow = '0 4px 30px rgba(255, 255, 255, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        }
    } else {
        if (isDarkMode) {
            header.style.background = 'rgba(34, 34, 34, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.05)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Add animation on scroll for article cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initially hide articles for animation
document.querySelectorAll('.article-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(card);
});

// Enhanced Dark Mode Toggle with persistence and icon change
const toggle = document.getElementById('darkModeToggle');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    updateToggleIcon();
}

// Toggle function
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save theme preference
    const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);

    updateToggleIcon();
    updateHeaderOnThemeChange();
});

// Update toggle icon based on current theme
function updateToggleIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggle.textContent = isDarkMode ? 'light_mode' : 'dark_mode';
    toggle.setAttribute('title', isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode');
}

// Update header styling when theme changes
function updateHeaderOnThemeChange() {
    const header = document.querySelector('header');
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (window.scrollY > 100) {
        if (isDarkMode) {
            header.style.background = 'rgba(34, 34, 34, 0.98)';
            header.style.boxShadow = '0 4px 30px rgba(255, 255, 255, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        }
    } else {
        if (isDarkMode) {
            header.style.background = 'rgba(34, 34, 34, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.05)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    }
}

// Smooth theme transition
document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';

document.querySelectorAll('.article-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

document.querySelectorAll('.article-link').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.querySelector('.article-image').style.transform = 'scale(1.1)';
        const overlay = this.querySelector('.article-image::after');
        if (overlay) overlay.style.opacity = '1';
    });

    link.addEventListener('mouseleave', function () {
        this.querySelector('.article-image').style.transform = 'scale(1)';
        const overlay = this.querySelector('.article-image::after');
        if (overlay) overlay.style.opacity = '0';
    });
});
// This doesn't seem to chance anything
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Add emphasis to contact icon
            if (targetId === '#contact-section') {
                const contactIcon = document.getElementById('contact-icon');
                if (contactIcon) {
                    // Remove any existing animation classes
                    contactIcon.classList.remove('contact-emphasis');

                    // Trigger reflow before adding class again
                    void contactIcon.offsetWidth;

                    // Add animation class
                    contactIcon.classList.add('contact-emphasis');

                    // Remove class after animation completes
                    setTimeout(() => {
                        contactIcon.classList.remove('contact-emphasis');
                    }, 1500);
                }
            }
        }
    });
});
// Enhanced scroll function with contact emphasis
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Add emphasis to contact icon
            if (targetId === '#contact-section') {
                const contactIcon = document.getElementById('contact-icon');
                if (contactIcon) {
                    // Remove any existing animation classes
                    contactIcon.classList.remove('contact-emphasis');

                    // Trigger reflow before adding class again
                    void contactIcon.offsetWidth;

                    // Add animation class
                    contactIcon.classList.add('contact-emphasis');

                    // Remove class after animation completes
                    setTimeout(() => {
                        contactIcon.classList.remove('contact-emphasis');
                    }, 1500);

                    // Add additional visual cue for light mode
                    if (!document.body.classList.contains('dark-mode')) {
                        contactIcon.style.backgroundColor = '#4a90e2';
                        setTimeout(() => {
                            contactIcon.style.backgroundColor = '';
                        }, 1500);
                    }
                }
            }
        }
    });
});
// 
//
//
 const contactIcon = document.getElementById('contact-icon');
        const contactModal = document.getElementById('contactModal');
        const closeModal = document.getElementById('closeModal');
        const emailForm = document.getElementById('emailForm');
        const successMessage = document.getElementById('successMessage');
        
        // Abrir modal
        contactIcon.addEventListener('click', () => {
            contactModal.style.display = 'flex';
        });
        
        // Cerrar modal
        closeModal.addEventListener('click', () => {
            contactModal.style.display = 'none';
        });
        
        // Cerrar modal haciendo clic fuera del contenido
        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });
        
        // Manejar envío del formulario
        emailForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Recoger datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    // Enviar con EmailJS
    emailjs.send('service_zqw9dbq', 'template_8s62web', templateParams)
        .then(function(response) {
            console.log('Correo enviado con éxito', response.status, response.text);
            successMessage.style.display = 'block';
            emailForm.reset();

            setTimeout(() => {
                contactModal.style.display = 'none';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 500);
            }, 3000);
        }, function(error) {
            alert("Hubo un error al enviar el correo. Intenta de nuevo.");
            console.error('Error al enviar correo:', error);
        });
});
        
        // Cerrar con la tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && contactModal.style.display === 'flex') {
                contactModal.style.display = 'none';
            }
        });