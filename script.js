function showMainContent() {
  document.getElementById("intro-video").style.display = "none";
  const main = document.getElementById("main-content");
  main.style.opacity = "1";
  main.style.pointerEvents = "auto";
  document.body.style.overflow = "auto";

  // Trigger animation for fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.animationDelay = "0.5s";
    el.classList.add('animated');
  });
}

// Fallback in case video fails
setTimeout(() => {
  if (document.getElementById("main-content").style.opacity === "0") {
    showMainContent();
  }
}, 8000);
