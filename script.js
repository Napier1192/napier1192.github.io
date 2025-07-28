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
}// Scroll animations using ScrollReveal
ScrollReveal().reveal('.scroll-animation', {
  distance: "50px",
  opacity: 0,
  duration: 1000
});

ScrollReveal().reveal('.scroll-delay-1', {
  distance: "50px",
  opacity: 0,
  duration: 1000,
  delay: 500
});

ScrollReveal().reveal('.scroll-delay-2', {
  distance: "50px",
  opacity: 0,
  duration: 1000,
  delay: 1000
});

ScrollReveal().reveal('.scroll-delay-3', {
  distance: "50px",
  opacity: 0,
  duration: 1000,
  delay: 1500
});

ScrollReveal().reveal('.scroll-delay-4', {
  distance: "50px",
  opacity: 0,
  duration: 1000,
  delay: 2000
});

ScrollReveal().reveal('.scroll-delay-5', {
  distance: "50px",
  opacity: 0,
  duration: 1000,
  delay: 2500
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursor.classList.remove('hide');
});
window.addEventListener('mousedown', () => {
  cursor.classList.add('click');
});
window.addEventListener('mouseup', () => {
  cursor.classList.remove('click');
});
window.addEventListener('mouseleave', () => {
  cursor.classList.add('hide');
});
window.addEventListener('mouseenter', () => {
  cursor.classList.remove('hide');
});

// ScrollReveal for new sections
ScrollReveal().reveal('.artwork-item', {
  distance: "40px",
  opacity: 0,
  duration: 900,
  interval: 120
});
ScrollReveal().reveal('.project-card', {
  distance: "40px",
  opacity: 0,
  duration: 900,
  interval: 120
});

// Animate artwork images in from right on scroll
const artworkItems = document.querySelectorAll('.artwork-item');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('artwork-animate-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  artworkItems.forEach(item => observer.observe(item));
} else {
  // Fallback: show all if IntersectionObserver not supported
  artworkItems.forEach(item => item.classList.add('artwork-animate-in'));
}
