document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Verwijder observer om herhaling te vermijden
      }
    });
  }, {
    threshold: 0.1 // 10% van het element moet zichtbaar zijn
  });

  fadeElements.forEach(el => observer.observe(el));
});
