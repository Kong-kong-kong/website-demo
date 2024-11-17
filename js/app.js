function setupScrollReveal() {
  try {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Optional: stop observing after reveal
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });
  } catch (error) {
    console.error('Error setting up scroll reveal:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupScrollReveal();
});