
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
