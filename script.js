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

// Scroll animations using ScrollReveal
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
