export const layoutModule = () => {
  const sections = document.querySelectorAll(".content-section");

  let scrolling = false;

  function handleScroll(e) {
    if (scrolling) return;
    const scrollDirection = e.deltaY > 0 ? 1 : -1;
    let nearestSectionIndex = -1;
    let minDistance = Number.MAX_VALUE;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);

      if (scrollDirection === 1 && rect.top > 0 && distance < minDistance) {
        nearestSectionIndex = index;
        minDistance = distance;
      } else if (
        scrollDirection === -1 &&
        rect.top < 0 &&
        distance < minDistance
      ) {
        nearestSectionIndex = index;
        minDistance = distance;
      }
    });

    if (nearestSectionIndex !== -1) {
      const targetSection = sections[nearestSectionIndex];
      const targetOffset =
        targetSection.getBoundingClientRect().top + window.scrollY;

      const duration = 300;
      const start = window.scrollY;
      const startTime = performance.now();

      scrolling = true;

      const bodyStyle = window.getComputedStyle(document.body);
      const overflowY = bodyStyle.getPropertyValue("overflow-y");

    }
  }

  function updateAspectRatio() {
    let aspectRatioDiv = document.getElementById('aspect-ratio');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let aspectRatio = width / height;
    let ratio;
    let dimension;

    if(width>height){
      dimension = " Landscape ";
    }else{
      dimension = " Portrait ";
    }

    if (aspectRatio > 1.8) {
      aspectRatioDiv.style.color = 'green';
      ratio = " (16/9 Landscape) "
    } else if (aspectRatio < 0.55) {
      aspectRatioDiv.style.color = 'blue';
      ratio = " (9/16 Portrait) "
    } else {
      aspectRatioDiv.style.color = 'black';
      ratio = " No ratio "
    }

    aspectRatioDiv.textContent ='[ '+ dimension + ' ] [ ' + width + ' : width ] [ '+ height + ' : height ] [ ' + aspectRatio.toFixed(2) + ' : ratio ]';

  }

  // Initial call to set the aspect ratio on page load
  updateAspectRatio();

  // Listen for resize events
  window.addEventListener('resize', updateAspectRatio);

  window.addEventListener("wheel", handleScroll, { passive: true });

  window.addEventListener("resize", handleScroll);
  
};