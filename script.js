window.addEventListener("load", () => {
  const introText = document.getElementById("intro-text");
  const navLeft = document.querySelector(".nav-left");
  const navCenterLinks = document.querySelectorAll(".nav-center a");
  const navRight = document.querySelector(".nav-right");

  // Trigger intro text scaling
  setTimeout(() => {
    introText.classList.add("active");

    // Sync navbar animations
    navLeft.classList.add("active");
    navRight.classList.add("active");
    navCenterLinks.forEach(link => link.style.animationPlayState = "running");

  }, 500); // delay so it's noticeable
});

// Scroll fade effect
window.addEventListener("scroll", () => {
  const introText = document.getElementById("intro-text");
  let scrollY = window.scrollY;
  let fadePoint = window.innerHeight / 1.2;

  if (scrollY < fadePoint) {
    introText.style.opacity = 1 - scrollY / fadePoint;
  } else {
    introText.style.opacity = 0;
  }
});
