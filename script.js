// Intro animation
window.addEventListener("load", () => {
  const introText = document.querySelector(".intro-text");
  const navbar = document.getElementById("navbar");
  const navLeft = document.querySelector(".nav-left");
  const navRight = document.querySelector(".nav-right");
  const navCenter = document.querySelector(".nav-center");

  // Step 1: Reveal text color wipe
  setTimeout(() => {
    introText.style.backgroundPosition = "0 0";
  }, 500);

  // Step 2: Scale up text
  setTimeout(() => {
    introText.style.transform = "scale(1.1)";

    // Step 3: Bring in navigation
    setTimeout(() => {
      navbar.style.transition = "opacity 1s ease";
      navbar.style.opacity = 1;

      navLeft.style.transition = "transform 1s ease";
      navRight.style.transition = "transform 1s ease";
      navCenter.style.transition = "transform 1s ease";

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
