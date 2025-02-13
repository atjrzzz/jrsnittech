// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Intersection Observer to trigger fade-in animations when sections come into view
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => {
  observer.observe(section);
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
  // Reset form
  document.getElementById('contact-form').reset();
});
