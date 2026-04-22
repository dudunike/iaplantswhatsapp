// Main logic for IAPLANTS landing page
// Focused on simplicity and smooth experience

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for reveal effect on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: unobserve if you only want it to happen once
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply reveal class to elements
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));
});
