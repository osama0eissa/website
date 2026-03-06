// Simple JS for smooth scroll and button effects

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Button ripple effect (optional)
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const circle = document.createElement('span');
      circle.className = 'ripple';
      circle.style.left = `${e.offsetX}px`;
      circle.style.top = `${e.offsetY}px`;
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
});
