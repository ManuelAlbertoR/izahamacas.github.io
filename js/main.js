document.addEventListener('DOMContentLoaded', function() {
    // Slider
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const slideInterval = 5000; // 5 segundos
    
    function showSlide(index) {
      // Reset
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(ind => ind.classList.remove('active'));
      
      // Mostrar nuevo slide
      slides[index].classList.add('active');
      indicators[index].classList.add('active');
      currentIndex = index;
    }
    
    function nextSlide() {
      const newIndex = (currentIndex + 1) % slides.length;
      showSlide(newIndex);
    }
    
    // Iniciar slider
    let sliderTimer = setInterval(nextSlide, slideInterval);
    
    // Pausar al interactuar
    const slider = document.querySelector('.slideshow-container');
    slider.addEventListener('mouseenter', () => clearInterval(sliderTimer));
    slider.addEventListener('mouseleave', () => {
      sliderTimer = setInterval(nextSlide, slideInterval);
    });
    
    // Click en indicadores
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        clearInterval(sliderTimer);
        showSlide(index);
        sliderTimer = setInterval(nextSlide, slideInterval);
      });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
  });