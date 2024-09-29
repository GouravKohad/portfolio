document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    burger.classList.toggle('toggle');
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Circular progress bars animation
  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.circle-progress');
    progressBars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      const circle = bar.querySelector('.progress');
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = offset;
    });
  };

  // ScrollReveal animations
  ScrollReveal().reveal('.hero h1, .hero p', { delay: 200, origin: 'top', distance: '50px', duration: 1000 });
  ScrollReveal().reveal('.cta-button', { delay: 400, origin: 'bottom', distance: '50px', duration: 1000 });
  ScrollReveal().reveal('.about-content', { delay: 200, origin: 'left', distance: '50px', duration: 1000 });
  ScrollReveal().reveal('.skill', { delay: 200, origin: 'bottom', distance: '50px', duration: 1000, interval: 200, afterReveal: animateProgressBars });
  ScrollReveal().reveal('.project-card', { delay: 200, origin: 'bottom', distance: '50px', duration: 1000, interval: 200 });
  ScrollReveal().reveal('.info-item', { delay: 200, origin: 'right', distance: '50px', duration: 1000, interval: 200 });
});