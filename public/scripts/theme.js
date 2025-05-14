// Theme toggle functionality
const initTheme = function () {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Get the user's theme preference from localStorage
  const savedTheme = localStorage.getItem('theme') || 'auto';
  applyTheme(savedTheme);

  // Listen for theme toggle clicks
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      // Only toggle between dark and light
      const currentTheme = htmlElement.classList.contains('dark-theme') ? 'light' : 'dark';
      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
    });
  }

  // Watch for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', function () {
    if (localStorage.getItem('theme') === 'auto') {
      applyTheme('auto');
    }
  });
};

const applyTheme = function (theme) {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const isDarkMode = theme === 'dark' || 
    (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  // Update classes
  htmlElement.classList.remove('light-theme', 'dark-theme');
  if (theme !== 'auto') {
    htmlElement.classList.add(isDarkMode ? 'dark-theme' : 'light-theme');
  }
  
  // Update button ARIA label
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', 
      `Switch to ${isDarkMode ? 'light' : 'dark'} theme`
    );
  }
};

// Initialize theme when the DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}
