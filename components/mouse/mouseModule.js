export const mouseModule = () => {
  const qs = (selector) => document.querySelector(selector);
  const mouseCircle = qs(".mouse-circle");
  const mouseArrow = qs(".mouse-arrow");
  const elementsToDetect = document.querySelectorAll('.detect-me');

  document.addEventListener('mousemove', (e) => {
    const left = e.pageX;
    const top = e.pageY;
    mouseCircle.style.left = left + 'px';
    mouseCircle.style.top = top + 'px';
    mouseCircle.style.visibility = 'visible';

    const viewportWidth = window.innerWidth;
    const mouseXPosition = e.clientX;
    const mousePercentage = (mouseXPosition / viewportWidth) * 100;

    mouseCircle.style.transform = mousePercentage <= 68 ? 'translate(20%, -75%)' : 'translate(-150%, -75%)';
  });

  const handleMouseOver = () => {
    mouseCircle.style.width = "10dvh";
    mouseCircle.style.height = "10dvh";
    mouseCircle.style.backgroundColor = "#b3d6d7";
    mouseArrow.style.left = "50.5%";
  };

  const handleMouseOut = () => {
    mouseArrow.style.left = "-100%";
    mouseCircle.style.width = "1.5dvh";
    mouseCircle.style.height = "1.5dvh";
    mouseCircle.style.backgroundColor = "#db5040";
  };

  elementsToDetect.forEach((element) => {
    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);
  });
};
