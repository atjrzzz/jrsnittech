// Toggle Side Navigation
function toggleNav() {
    const sideNav = document.getElementById('sideNav');
    const overlay = document.getElementById('overlay');
    sideNav.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Close Side Navigation
function closeNav() {
    const sideNav = document.getElementById('sideNav');
    const overlay = document.getElementById('overlay');
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
}
