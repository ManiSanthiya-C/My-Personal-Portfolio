window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  
    const reveal = () => {
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const winHeight = window.innerHeight;
        if (top < winHeight - 100) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    };
  
    window.addEventListener('scroll', reveal);
    reveal(); 
  });
  