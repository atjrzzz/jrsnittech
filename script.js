// script.js
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mainContent = document.querySelector('main');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Sidebar Toggle
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('shift');
});

// Dark Mode Toggle
themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.textContent = body.dataset.theme === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});