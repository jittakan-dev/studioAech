const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

export const navBubbleModule = () => {
  const sections = qsa(".content-section");
  const menuBubble = qs(".bubble-handle");
  const menuButton = qs(".bubble-button");
  const menuButtonClick = qs(".bubble-button-hamburger");
  const hiddenMenuLinks = qsa(".right-menu a");
  const dotGroupLinks = qsa(".nav-dot-group a");
  const logoSticky = qs(".logo-sticky");

  let isDragging = false;
  let menuBubbleRect;
  let menuButtonRect;
  let viewportRect;

  menuBubble.addEventListener("mousedown", startDrag, {passive: true});
  menuBubble.addEventListener("touchstart", startDrag, {passive: true});

  function startDrag(e) {
    e.preventDefault();
    isDragging = true;
    menuBubbleRect = menuBubble.getBoundingClientRect();
    menuButtonRect = menuButton.getBoundingClientRect();
    viewportRect = {
      top: 0,
      left: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
    };
    menuBubble.classList.add("grabbing");

    const moveHandler = e.type === "mousedown" ? handleMouseMove : handleTouchMove;

    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", handleRelease);
    document.addEventListener("touchmove", moveHandler, { passive: false });
    document.addEventListener("touchend", handleRelease);
  }

  function handleMouseMove(e) {
    moveMenuBubble(e.clientX, e.clientY);
  }

  function handleTouchMove(e) {
    const touch = e.touches[0];
    moveMenuBubble(touch.clientX, touch.clientY);
  }

  function moveMenuBubble(clientX, clientY) {
    if (isDragging) {
      let newX = clientX - menuBubbleRect.width / 2 - menuButtonRect.width / 2;
      let newY = clientY - menuBubbleRect.height / 2 - menuButtonRect.height / 2;

      newX = Math.max(viewportRect.left, Math.min(viewportRect.right - menuBubbleRect.width * 1.77, newX));
      newY = Math.max(viewportRect.top, Math.min(viewportRect.bottom - menuBubbleRect.height * 1.5, newY));

      menuButton.style.left = `${newX}px`;
      menuButton.style.top = `${newY}px`;

      sections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();
        if (
          clientX >= sectionRect.left &&
          clientX <= sectionRect.right &&
          clientY >= sectionRect.top &&
          clientY <= sectionRect.bottom
        ) {
          updateColors(section.id);
        }
      });
    }
  }

  function handleRelease() {
    isDragging = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleRelease);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleRelease);
    menuBubble.classList.remove("grabbing");
  }

  const updateColors = (sectionId) => {
    const colors = {
      home: { bubble: "#EBEBEB", click: "#212529" },
      work: { bubble: "#02757b", click: "#bebebe" },
      about: { bubble: "#02757b", click: "#bebebe" },
    };

    hiddenMenuLinks.forEach((link) => link.classList.remove("bubbleLinkActive"));
    dotGroupLinks.forEach((link) => link.classList.remove("navLinkActive"));

    const { bubble, click } = colors[sectionId] || colors.home;
    [menuBubble, menuButtonClick, menuButton].forEach((element) => (element.style.backgroundColor = bubble));
    qs(".bubble-handle-button", menuBubble).style.backgroundColor = click;

    const index = Math.max(0, ["home", "work", "about"].indexOf(sectionId));
    hiddenMenuLinks[index].classList.add("bubbleLinkActive");
    dotGroupLinks[index].classList.add("navLinkActive");

    logoSticky.style.visibility = (sectionId === "home") ? "hidden" : "visible";
    logoSticky.style.opacity = (sectionId === "home") ? "0" : "1";
  };

  const getActiveSection = () => {
    const menuButtonRect = menuButton.getBoundingClientRect();
    for (const section of sections) {
      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.top < menuButtonRect.bottom && sectionRect.bottom > menuButtonRect.top) {
        return section.id;
      }
    }
    return null;
  };

  const handleMenuBubbleMouseOver = () => {
    const activeSection = getActiveSection();
    if (activeSection) {
      qs(".bubble-handle-button", menuBubble).style.backgroundColor = "#db460c";
    }
  };

  const handleMenuBubbleMouseOut = () => {
    const activeSection = getActiveSection();
    if (activeSection) {
      updateColors(activeSection);
    }
  };

  window.addEventListener("scroll", () => {
    const menuButtonRect = menuButton.getBoundingClientRect();
    sections.forEach((section) => {
      const sectionRect = section.getBoundingClientRect();
      if (
        sectionRect.top < menuButtonRect.bottom &&
        sectionRect.bottom > menuButtonRect.top
      ) {
        updateColors(section.id);
      }
    });
  });

  menuBubble.addEventListener("mouseup", () => (isDragging = false));
  menuBubble.addEventListener("touchend", () => (isDragging = false));
  menuBubble.addEventListener("mouseover", handleMenuBubbleMouseOver);
  menuBubble.addEventListener("mouseout", handleMenuBubbleMouseOut);
};