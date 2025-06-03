// Dark mode functionality
const toggle = document.getElementById('darkModeToggle');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    updateToggleIcon();
    updateHeaderOnThemeChange();
}

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
    updateToggleIcon();
    updateHeaderOnThemeChange();

});

function updateToggleIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggle.textContent = isDarkMode ? 'light_mode' : 'dark_mode';
    toggle.setAttribute('title', isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode');
}

// Search functionality
const searchInput = document.getElementById('searchInput');
const articlesGrid = document.getElementById('articlesGrid');
const noResults = document.getElementById('noResults');
const allArticles = Array.from(document.querySelectorAll('.article-card'));

if (searchInput) {
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();
        filterArticles(searchTerm, getActiveFilter());
    });
}

// Filter functionality
const filterTags = document.querySelectorAll('.filter-tag');

filterTags.forEach(tag => {
    tag.addEventListener('click', function () {
        filterTags.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        filterArticles(searchTerm, filter);
    });
});

function getActiveFilter() {
    const activeTag = document.querySelector('.filter-tag.active');
    return activeTag ? activeTag.getAttribute('data-filter') : 'all';
}

function filterArticles(searchTerm, filter) {
    let visibleCount = 0;

    allArticles.forEach(article => {
        const tags = article.getAttribute('data-tags').split(',');
        const title = article.querySelector('h3').textContent.toLowerCase();
        const description = article.querySelector('p').textContent.toLowerCase();

        const matchesSearch = searchTerm === '' ||
            title.includes(searchTerm) ||
            description.includes(searchTerm);

        const matchesFilter = filter === 'all' || tags.includes(filter);

        if (matchesSearch && matchesFilter) {
            article.style.display = 'block';
            visibleCount++;
        } else {
            article.style.display = 'none';
        }
    });

    updateResultsUI(visibleCount, searchTerm, filter);
}
window.addEventListener('scroll', updateHeaderOnThemeChange);

// Smooth theme transition
document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
function updateHeaderOnThemeChange() {
    const header = document.querySelector('header');
    if (!header) return;

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
function updateResultsUI(visibleCount, searchTerm, filter) {
    const resultsCount = document.getElementById('resultsCount');

    if (visibleCount === 0) {
        if (noResults) noResults.style.display = 'block';
        if (articlesGrid) articlesGrid.style.display = 'none';

        let message = 'No articles found';
        if (searchTerm !== '' || filter !== 'all') {
            message += ' matching your ';
            if (searchTerm !== '') message += `search for "${searchTerm}"`;
            if (searchTerm !== '' && filter !== 'all') message += ' and ';
            if (filter !== 'all') message += `filter for "${filter}"`;
        }
        if (noResults) noResults.querySelector('h3').textContent = message;
    } else {
        if (noResults) noResults.style.display = 'none';
        if (articlesGrid) articlesGrid.style.display = 'grid';

        let message = `Showing ${visibleCount} article${visibleCount !== 1 ? 's' : ''}`;
        if (searchTerm !== '' || filter !== 'all') {
            message += ' matching ';
            if (searchTerm !== '') message += `"${searchTerm}"`;
            if (searchTerm !== '' && filter !== 'all') message += ' and ';
            if (filter !== 'all') message += `"${filter}"`;
        }
        if (resultsCount) resultsCount.textContent = message;
    }
}

// Sort functionality
const sortSelect = document.getElementById('sortSelect');

if (sortSelect) {
    sortSelect.addEventListener('change', function () {
        const sortValue = this.value;
        sortArticles(sortValue);
    });
}

function sortArticles(sortBy) {
    const articlesContainer = document.getElementById('articlesGrid');
    if (!articlesContainer) return;

    const articles = Array.from(articlesContainer.children);

    articles.sort((a, b) => {
        if (sortBy === 'newest') {
            const dateA = new Date(a.querySelector('time').getAttribute('datetime'));
            const dateB = new Date(b.querySelector('time').getAttribute('datetime'));
            return dateB - dateA;
        } else if (sortBy === 'oldest') {
            const dateA = new Date(a.querySelector('time').getAttribute('datetime'));
            const dateB = new Date(b.querySelector('time').getAttribute('datetime'));
            return dateA - dateB;
        } else if (sortBy === 'title') {
            const titleA = a.querySelector('h3').textContent.toLowerCase();
            const titleB = b.querySelector('h3').textContent.toLowerCase();
            return titleA.localeCompare(titleB);
        }
        return 0;
    });

    articles.forEach(article => articlesContainer.appendChild(article));
}

// Clear search functionality
const clearSearchBtn = document.getElementById('clearSearch');

if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', function () {
        if (searchInput) {
            searchInput.value = '';
            filterArticles('', getActiveFilter());
            searchInput.focus();
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Add dates to articles if not present
    const articles = document.querySelectorAll('.article-card');
    //const sampleDates = [
    //  '2024-12-15', '2024-12-10', '2024-12-05',
    //  '2024-11-28', '2024-11-20', '2024-11-15'
    //];

    articles.forEach((article, index) => {
        if (!article.querySelector('time')) {
            const articleContent = article.querySelector('.article-content');
            if (articleContent) {
                //          const dateElement = document.createElement('time');
                //        dateElement.className = 'article-date';
                //      dateElement.setAttribute('datetime', sampleDates[index]);
                //    dateElement.textContent = formatDate(sampleDates[index]);
                articleContent.insertBefore(dateElement, articleContent.querySelector('p'));
            }
        }
    });

    filterArticles('', 'all');
});

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Load more functionality
const loadMoreBtn = document.getElementById('loadMoreBtn');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function () {
        console.log('Load more articles functionality would go here');
    });
}

// Contact emphasis functionality
function setupContactEmphasis() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#contact-section') {
                e.preventDefault();
                const target = document.querySelector('#contact-section');

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    const contactIcon = document.getElementById('contact-icon');
                    if (contactIcon) {
                        // Reset animation
                        contactIcon.classList.remove('contact-emphasis');
                        void contactIcon.offsetWidth; // Trigger reflow

                        // Add animation class
                        contactIcon.classList.add('contact-emphasis');

                        // Remove animation class after it completes
                        setTimeout(() => {
                            contactIcon.classList.remove('contact-emphasis');
                        }, 1500);

                        // Additional visual cue for light mode
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
}

// Scroll effect for header
function setupHeaderScrollEffect() {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (!header) return;

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
}

// Initialize effects
document.addEventListener('DOMContentLoaded', function () {
    setupContactEmphasis();
    setupHeaderScrollEffect();

    // Smooth theme transition
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
});
// new form changes 
// new form changes 
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
//
//
//
// Clear search functionality
const clearSearchIcon = document.getElementById('clearSearchIcon');

if (clearSearchIcon && searchInput) {
    clearSearchIcon.addEventListener('click', function() {
        searchInput.value = '';
        filterArticles('', getActiveFilter());
        searchInput.focus();
        clearSearchIcon.style.display = 'none';
    });

    // Show/hide clear icon based on input
    searchInput.addEventListener('input', function() {
        clearSearchIcon.style.display = this.value ? 'block' : 'none';
    });
}