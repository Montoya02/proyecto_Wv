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
//


// Contact Form Modal functionality
const modal = document.getElementById("contactModal");
const contactIcon = document.getElementById("contact-icon");
const closeBtn = document.querySelector(".close");
const contactForm = document.getElementById("contact-form");
const formMessages = document.getElementById("formMessages");

// Open modal when contact icon is clicked
contactIcon.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Add class to body to prevent scrolling
    document.body.classList.add("modal-open");

    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
});

// Add this to close handler
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.classList.remove("modal-open");
    }, 300);
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// Form submission handler
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset messages
    formMessages.className = "";
    formMessages.textContent = "";

    // Validate form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !subject || !message) {
        showMessage("Please fill in all required fields", "error");
        return;
    }

    // Send email using EmailJS
    emailjs.sendForm(
        'service_zqw9dbq',
        'template_8s62web',
        contactForm
    )
        .then(() => {
            showMessage("Message sent successfully!", "success");
            contactForm.reset();
        })
        .catch((error) => {
            showMessage("Failed to send message. Please try again.", "error");
            console.error('EmailJS error:', error);
        });
});

// Show form messages
function showMessage(message, type) {
    formMessages.textContent = message;
    formMessages.className = type;
}
