
        // Reuse dark mode functionality from main site
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
        });
        
        // Update toggle icon based on current theme
        function updateToggleIcon() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            toggle.textContent = isDarkMode ? 'light_mode' : 'dark_mode';
            toggle.setAttribute('title', isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode');
        }
        
        // Smooth theme transition
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
/* Add button effects to category badge */
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