// LOADING SCREEN
window.onload = function() {
    document.getElementById("preloader").style.display = "none";
};

// DARK MODE TOGGLE
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// SCROLL-TO-TOP BUTTON
const scrollToTop = document.getElementById("scrollToTop");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
};

scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// FORM SUBMISSION ALERT
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
