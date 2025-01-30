function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Check if the user has a preferred theme in local storage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'night-mode') {
      body.classList.add('night-mode');
  }
  
  updateButtonText();

  // Toggle between day and night modes
  themeToggleBtn.addEventListener('click', () => {
      const isNightMode = body.classList.toggle('night-mode');
      localStorage.setItem('theme', isNightMode ? 'night-mode' : 'light-mode');
      updateButtonText();
  });

  // Update the button text based on the current mode
  function updateButtonText() {
      const isNightMode = body.classList.contains('night-mode');
      themeToggleBtn.textContent = isNightMode ? '☀️' : '🌙';
  }
});
