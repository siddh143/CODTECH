document.addEventListener('DOMContentLoaded', () => {
  // Scroll‑reveal with IntersectionObserver
  const revealEls = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  revealEls.forEach(el => obs.observe(el));

  // Simple form validation with shake animation
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.classList.add('invalid');
        setTimeout(() => field.classList.remove('invalid'), 500);
      }
    });
    if (valid) {
      alert('Message sent! 🎉');
      form.reset();
    }
  });
});
