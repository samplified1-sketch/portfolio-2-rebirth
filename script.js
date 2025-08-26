// Intro animation
window.addEventListener("load", () => {
  const introText = document.querySelector(".intro-text");
  const navbar = document.getElementById("navbar");
  const navLeft = document.querySelector(".nav-left");
  const navRight = document.querySelector(".nav-right");
  const navCenter = document.querySelector(".nav-center");

  // Step 1: Reveal text with gradient wipe
  setTimeout(() => {
    introText.style.backgroundPosition = "0 0";
  }, 500);

  // Step 2: Scale up text while staying centered
  setTimeout(() => {
    introText.style.transform = "translate(-50%, -50%) scale(1.3)";

    // Step 3: Bring in navbar
    setTimeout(() => {
      navbar.style.opacity = 1;
      navLeft.style.transform = "translateX(0)";
      navRight.style.transform = "translateX(0)";
      navCenter.style.transform = "translateY(0)";
    }, 500);
  }, 2000);
});

// Scroll fade effect
window.addEventListener("scroll", () => {
  const introText = document.querySelector(".intro-text");
  const scrollY = window.scrollY;
  const fadeEnd = window.innerHeight; // fade over one viewport height
  let opacity = 1 - scrollY / fadeEnd;
  opacity = Math.max(0, Math.min(1, opacity));
  introText.style.opacity = opacity;
});
