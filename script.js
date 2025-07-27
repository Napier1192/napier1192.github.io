document.addEventListener("DOMContentLoaded", () => {
  const introVideo = document.getElementById("intro-video");
  const mainContent = document.getElementById("main-content");

  // When video ends, show content
  introVideo.addEventListener("ended", () => {
    introVideo.style.display = "none";
    mainContent.style.opacity = "1";
    mainContent.style.pointerEvents = "auto";
    document.body.style.overflow = "auto";
  });

  // Fallback after 8s if video fails to load or autoplay
  setTimeout(() => {
    if (mainContent.style.opacity === "0") {
      introVideo.style.display = "none";
      mainContent.style.opacity = "1";
      mainContent.style.pointerEvents = "auto";
      document.body.style.overflow = "auto";
    }
  }, 8000);
});
