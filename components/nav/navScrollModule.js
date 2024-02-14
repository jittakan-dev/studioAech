const qs = (selector) => document.querySelector(selector);

export const navScrollModule = () => {
  const menuSection = qs(".menu-section");
  const menuButtonClick = qs(".bubble-button-hamburger");
  const hiddenMenuLinks = document.querySelectorAll(".right-menu a, .nav-dot-group a, .home-bar-content-link a");
  const aboutContainer = qs(".about-container");
  const aboutContent = qs(".about-content-container");

  const smoothScroll = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.scrollBehavior = "smooth";
  };

  const resetScrollBehavior = () => {
    document.documentElement.style.scrollBehavior = "";
    document.body.style.scrollBehavior = "";
  };

  const toggleMenu = () => {
    menuButtonClick.classList.toggle("menu-active");
    menuSection.classList.toggle("active");
  };

  const scrollToTarget = (targetId, scrollLeft) => {
    const targetSection = qs(targetId);
    if (targetSection) {
      const targetOffset = targetSection.getBoundingClientRect().top;
      const initialOffset = window.scrollY;
      const difference = targetOffset;
      const minDuration = 400;
      const maxDuration = 700;
      const exponent = 0.5;
      const distance = Math.abs(difference);
      const duration = Math.min(
        maxDuration,
        minDuration + Math.pow(distance, exponent)
      );

      let startTime = null;

      function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const fraction = Math.min(progress / duration, 1);
        const interpolatedOffset = initialOffset + difference * fraction;
        window.scrollTo(0, interpolatedOffset);
        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      }
      requestAnimationFrame(scrollStep);

      setTimeout(() => {
        aboutContainer.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }, 1400);
    }
  };

  menuButtonClick.addEventListener("click", toggleMenu);

  hiddenMenuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      smoothScroll();
      menuSection.classList.remove("active");
      menuButtonClick.classList.remove("menu-active");
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const scrollLeft = targetId === "#contact" ? aboutContent.offsetWidth + 2 : 0;
      scrollToTarget(targetId, scrollLeft);
      setTimeout(resetScrollBehavior, 1000);
    });
  });
};