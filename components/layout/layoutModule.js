export const layoutModule = () => {
  const sections = document.querySelectorAll(".content-section");
  let scrolling = false;

  function handleScroll(e) {
    if (scrolling) return;
    const scrollDirection = e.deltaY > 0 ? 1 : -1;
    let minDistance = Number.MAX_VALUE;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(scrollDirection === 1 ? rect.top : rect.bottom);

      if (scrollDirection * rect.top > 0 && distance < minDistance) {
        minDistance = distance;
      }
    });
  }

  updateAspectRatio();
  window.addEventListener('resize', updateAspectRatio);
  window.addEventListener("wheel", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);
};

function updateAspectRatio() {
  const aspectRatioDiv = document.getElementById('aspect-ratio');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspectRatio = width / height;
  let ratio, dimension = width > height ? " Landscape " : " Portrait ";

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

  aspectRatioDiv.textContent = '[ ' + dimension + ' ] [ ' + width + ' : width ] [ ' + height + ' : height ] [ ' + aspectRatio.toFixed(2) + ' : ratio ]';
}
