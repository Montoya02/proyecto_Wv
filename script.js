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
window.addEventListener('scroll', function() {
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

const observer = new IntersectionObserver(function(entries) {
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

