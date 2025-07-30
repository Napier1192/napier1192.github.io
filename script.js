// Overlay control
function on() {
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "visible";
}

// Show story section
function show_story() {
  $('.story').fadeIn(600);
  $('.show-button').addClass('hide');
}

function scrollCarousel(direction) {
  const track = document.getElementById("youtubeTrack");
  const scrollAmount = track.clientWidth * 0.9;
  track.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function updateCursor() {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;
  
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
}

function animateCursor() {
  updateCursor();
  requestAnimationFrame(animateCursor);
}

animateCursor();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(10, 10, 10, 0.98)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
  }
});

// Scroll animations using ScrollReveal
ScrollReveal().reveal('.section-title', {
  distance: '50px',
  opacity: 0,
  duration: 1000,
  origin: 'bottom'
});

ScrollReveal().reveal('.project-card', {
  distance: '30px',
  opacity: 0,
  duration: 800,
  interval: 200,
  origin: 'bottom'
});

ScrollReveal().reveal('.personal-project', {
  distance: '30px',
  opacity: 0,
  duration: 800,
  interval: 200,
  origin: 'bottom'
});

ScrollReveal().reveal('.artwork-item', {
  distance: '40px',
  opacity: 0,
  duration: 1000,
  interval: 300,
  origin: 'right'
});

ScrollReveal().reveal('.video-card', {
  distance: '30px',
  opacity: 0,
  duration: 800,
  interval: 200,
  origin: 'bottom'
});

// Intersection Observer for custom animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for custom animations
document.querySelectorAll('.project-card, .personal-project, .artwork-item, .video-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add active state styles
const style = document.createElement('style');
style.textContent = `
  .nav-links a.active {
    color: var(--primary-color) !important;
  }
  .nav-links a.active::after {
    width: 100% !important;
  }
`;
document.head.appendChild(style);

// Artwork Carousel functionality
let currentSlide = 0;
const carouselTrack = document.getElementById('artworkCarousel');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.carousel-item').length;

function moveCarousel(direction) {
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  
  updateCarousel();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateCarousel();
}

function updateCarousel() {
  const slideWidth = 100 / getVisibleSlides();
  const translateX = -currentSlide * slideWidth;
  
  if (carouselTrack) {
    carouselTrack.style.transform = `translateX(${translateX}%)`;
  }
  
  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function getVisibleSlides() {
  if (window.innerWidth >= 1024) {
    return 3; // Desktop: 3 slides visible
  } else if (window.innerWidth >= 768) {
    return 2; // Tablet: 2 slides visible
  } else {
    return 1; // Mobile: 1 slide visible
  }
}

// Auto-advance carousel
let carouselInterval;

function startCarouselAutoAdvance() {
  carouselInterval = setInterval(() => {
    moveCarousel(1);
  }, 5000); // Change slide every 5 seconds
}

function stopCarouselAutoAdvance() {
  clearInterval(carouselInterval);
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
  if (carouselTrack) {
    startCarouselAutoAdvance();
    
    // Pause auto-advance on hover
    carouselTrack.addEventListener('mouseenter', stopCarouselAutoAdvance);
    carouselTrack.addEventListener('mouseleave', startCarouselAutoAdvance);
    
    // Handle window resize
    window.addEventListener('resize', () => {
      updateCarousel();
    });
  }
});
