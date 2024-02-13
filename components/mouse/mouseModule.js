export const mouseModule = () => {
    /*------------------------------------------------------------*/
const mouseCircle = document.querySelector(".mouse-circle");
const mouseArrow = document.querySelector(".mouse-arrow");
document.addEventListener('mousemove', function(e) {
  let left = e.pageX;
  let top = e.pageY;
  mouseCircle.style.left = left + 'px';
  mouseCircle.style.top = top + 'px';
  mouseCircle.style.visibility = 'visible'

  const viewportWidth = window.innerWidth;
  const mouseXPosition = e.clientX;

  const mousePercentage = (mouseXPosition / viewportWidth) * 100;

  if (mousePercentage <= 68) {
    mouseCircle.style.transform = 'translate(20%, -75%)';
  } else {
    mouseCircle.style.transform = 'translate(-150%, -75%)';
  }
});

var elementsToDetect = document.querySelectorAll('.detect-me');

function handleMouseOver(event) {
    mouseCircle.style.width ="10dvh";  
    mouseCircle.style.height ="10dvh"; 
    mouseCircle.style.backgroundColor ="#b3d6d7"; 
    // mouseCircle.style.backgroundColor ="rgba(179, 214, 215, 0.9)"; 
    mouseArrow.style.left="50.5%";
}
function handleMouseOut(event) {
    mouseArrow.style.left="-100%";
    mouseCircle.style.width ="1.5dvh";  
    mouseCircle.style.height ="1.5dvh"; 
    mouseCircle.style.backgroundColor ="#db5040"; 

}
elementsToDetect.forEach(function(element) {
  element.addEventListener('mouseover', handleMouseOver);
  element.addEventListener('mouseout', handleMouseOut);

});
/*------------------------------------------------------------*/
}