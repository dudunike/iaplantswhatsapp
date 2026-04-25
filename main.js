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

  // Viewer count fluctuation
  const viewerCountEl = document.getElementById('viewer-count');
  if (viewerCountEl) {
    let count = 47;
    setInterval(() => {
      // Random fluctuation between 47 and 51
      const change = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
      count = Math.max(47, Math.min(52, count + change));
      viewerCountEl.textContent = count;
    }, 3000);
  }

  // Discount Popup Logic (shows after 40 seconds)
  const popup = document.getElementById('discount-popup');
  const closePopup = document.getElementById('popup-close');

  if (popup && closePopup) {
    setTimeout(() => {
      popup.classList.add('active');
    }, 40000); // 40 seconds

    closePopup.addEventListener('click', () => {
      popup.classList.remove('active');
    });

    // Optional: close if click outside the content
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('active');
      }
    });
  }
});
