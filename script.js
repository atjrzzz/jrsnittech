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

// Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Open Contact Modal
function openContactModal() {
    openModal('contactModal');
}

// Close Contact Modal
function closeContactModal() {
    closeModal('contactModal');
}

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.style.opacity = '20';

    header.addEventListener('mouseover', function() {
        header.style.opacity = '1';
    });

    header.addEventListener('mouseout', function() {
        header.style.opacity = '0';
    });
});
