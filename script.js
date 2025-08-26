// Intro animation
window.addEventListener("load", () => {
  const introText = document.querySelector(".intro-text");
  const navbar = document.getElementById("navbar");

  // Step 1: Gradient wipe
  setTimeout(() => {
    introText.style.backgroundPosition = "0 0";
  }, 500);

  // Step 2: Scale up text + bring in navbar simultaneously
  setTimeout(() => {
    introText.style.transform = "translate(-50%, -50%) scale(1.3)";
    navbar.classList.add("active");
  }, 2000);
});

// Scroll fade effect for intro text
window.addEventListener("scroll", () => {
  const introText = document.querySelector(".intro-text");
  const scrollY = window.scrollY;
  const fadeEnd = window.innerHeight; // fade over one viewport height
  let opacity = 1 - scrollY / fadeEnd;
  introText.style.opacity = Math.max(0, Math.min(1, opacity));
});
