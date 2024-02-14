const qs = (selector) => document.querySelector(selector);

export const aboutModule = () => {
  const aboutContainer = qs(".about-container"),
    aboutContentContainer = qs(".about-content-container"),
    otwdHubButton = qs("#otwdHubButton"),
    writeUsButton = qs("#writeUsButton"),
    hubGroup = qs("#hubGroup"),
    formGroup = qs("#formGroup"),
    contactScroll = qs(".form-hub-slide-group");

  const toggleButton = (activeButton, inactiveButton, yOffset) => {
    activeButton.classList.add("contactTypeButtonActive");
    inactiveButton.classList.remove("contactTypeButtonActive");
    contactScroll.style = `scroll-behavior: smooth; transform: translateY(-${Math.abs(yOffset)}px)`;
  };

  otwdHubButton.addEventListener("click", () => {
    const yOffset = hubGroup.getBoundingClientRect().top - contactScroll.getBoundingClientRect().top;
    toggleButton(otwdHubButton, writeUsButton, yOffset);
  });

  writeUsButton.addEventListener("click", () => {
    const yOffset = formGroup.getBoundingClientRect().top - contactScroll.getBoundingClientRect().top;
    toggleButton(writeUsButton, otwdHubButton, yOffset);
  });

  qs("#AboutToLeft").addEventListener("click", () => aboutContainer.scrollTo({ left: 0, behavior: "smooth" }));
  qs("#AboutToRight").addEventListener("click", () => aboutContainer.scrollTo({ left: aboutContentContainer.offsetWidth + 2, behavior: "smooth" }));
};
