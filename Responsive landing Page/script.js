document.addEventListener('DOMContentLoaded', () => {

    // Hero Text Animation - Delayed fade-in effect
    const heroText = document.querySelector('.hero h1');
    const subText = document.querySelector('.hero .sub-text');
    const ctaButton = document.querySelector('.hero .cta-btn');
  
    // Apply animation delay for smoother transitions
    setTimeout(() => {
      heroText.style.opacity = '1';
      heroText.style.transform = 'translateY(0)';
    }, 300);
  
    setTimeout(() => {
      subText.style.opacity = '1';
      subText.style.transform = 'translateY(0)';
    }, 500);
  
    setTimeout(() => {
      ctaButton.style.opacity = '1';
      ctaButton.style.transform = 'translateY(0)';
    }, 700);
  
    // Scroll Animations (fade-in effect when the user scrolls)
    const fadeInElements = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
  
    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  
    // Smooth Scroll Effect on CTA buttons
    const ctaLinks = document.querySelectorAll('.cta-btn');
    ctaLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust the offset for the navbar
          behavior: 'smooth'
        });
      });
    });
  
  });
  