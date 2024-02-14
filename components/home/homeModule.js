const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);
export const homeModule = () => {
  const globeBalloon = qs(".home-globe-balloon");
  const homeSpeechBubble = qs(".home-speechBubble");
  const arrowSignImg = qs(".home-arrow-sign");

  const globeCore = qs(".home-globe-container");
  const globeBalloonBg = qs(".home-globe-balloon-bg");
  const globeBalloonSmall = qs(".home-globe-balloon-small");
  const globeWheel = qs(".home-globe-wheel-group");
  const globeLighthouse = qs(".home-globe-lighthouse");
  const laser = qsa(".home-laser-beam");

  const weDoTitle = qsa(".home-slide-we-do-title");
  const weAreTitle = qsa(".home-slide-we-are-title");
  const weGuideTitle = qsa(".home-slide-we-guide-title");

  const weDoSlide = qs(".home-slide-we-do-body");
  const weAreSlide = qs(".home-slide-we-are-body");
  const weGuideSlide = qs(".home-slide-we-guide-body");

  const weDoBar = qs(".home-bar-we-do");
  const weAreBar = qs(".home-bar-we-are");
  const weGuideBar = qs(".home-bar-we-guide");

  const homeBalloonTitleContainer = qs(".home-balloon-title-container");
  const homeBalloonTitle = qs(".home-balloon-title");

  const homeUfoGroup = qs(".home-ufo-group");

  function rotateWorld(degrees, index,duration) {
    const titleAdjustments = [
      [{ titles: weDoTitle, topValue: "0" }, { titles: weAreTitle, topValue: "100%" }, { titles: weGuideTitle, topValue: "200%" }],
      [{ titles: weDoTitle, topValue: "-100%" }, { titles: weAreTitle, topValue: "0" }, { titles: weGuideTitle, topValue: "100%" }],
      [{ titles: weDoTitle, topValue: "-200%" }, { titles: weAreTitle, topValue: "-100%" }, { titles: weGuideTitle, topValue: "0" }]
  ];
  
  if (index >= 1 && index <= 3) {
      titleAdjustments[index - 1].forEach(({ titles, topValue }) => {
          titles.forEach(title => {
              title.style.top = topValue;
          });
      });
  }
    if (index == 1) {
      weDoSlide.style.top = "0";
      weDoBar.style.top = "0";
      weAreSlide.style.top = "100%";
      weAreBar.style.top = "100%";
      weGuideSlide.style.top = "200%";
      weGuideBar.style.top = "200%";

      homeSpeechBubble.style.visibility = "hidden";
      homeSpeechBubble.style.opacity = 0;
      globeLighthouse.style.visibility = "hidden";
      globeLighthouse.style.opacity = 0;
      homeUfoGroup.style.bottom = "120%";
      
      setTimeout(() => {
        laser.forEach(element => {
              element.style.animation = "none";
          });
      }, 400);
  
      setTimeout(() => {          
        globeBalloon.style.transform = "rotate(10deg)";
        globeBalloonBg.style.transform = "rotate(10deg)";
        globeBalloonSmall.style.transform = "rotate(10deg)";
        globeWheel.style.transform = "rotate(10deg)";
  
        setTimeout(() => {
          globeBalloon.style.transform = "rotate(-20deg)";
          globeBalloonBg.style.transform = "rotate(-20deg)";
          globeBalloonSmall.style.transform = "rotate(-20deg)";
          globeWheel.style.transform = "rotate(-20deg)";
          homeBalloonTitleContainer.style.opacity = "1";
          homeBalloonTitle.style.top = "0";
  
          setTimeout(() => {
            globeBalloon.style.transform = "rotate(0deg)";
            globeBalloonBg.style.transform = "rotate(0deg)";
            globeBalloonSmall.style.transform = "rotate(0deg)";
            globeWheel.style.transform = "rotate(0deg)";
            globeBalloonSmall.style.opacity = 1;
          }, 500);    
        }, 720);    
      }, 700);    
    } else if (index == 2) {    
      weDoSlide.style.top = "-100%";
      weDoBar.style.top = "-100%";
      weAreSlide.style.top = "0";
      weAreBar.style.top = "0";
      weGuideSlide.style.top = "100%";
      weGuideBar.style.top = "100%";
   
      setTimeout(() => {
        homeBalloonTitleContainer.style.opacity="0";
        homeBalloonTitle.style.top ="100%";
      }, 100);
      setTimeout(() => {
        globeBalloonSmall.style.opacity = 0;
        homeUfoGroup.style.bottom = "120%";
      }, 400);
      globeBalloon.style.transform = "rotate(10deg)";
      globeBalloonBg.style.transform = "rotate(10deg)";
      globeBalloonSmall.style.transform = "rotate(10deg)";
      globeWheel.style.transform = "rotate(10deg)";
      setTimeout(() => {
        globeBalloon.style.transform = "rotate(-20deg)";
        globeBalloonBg.style.transform = "rotate(-20deg)";
        globeBalloonSmall.style.transform = "rotate(-20deg)";
        globeWheel.style.transform = "rotate(-20deg)";
        setTimeout(() => {
          globeBalloon.style.transform = "rotate(0deg)";
          globeBalloonBg.style.transform = "rotate(0deg)";
          globeBalloonSmall.style.transform = "rotate(0deg)";
          globeWheel.style.transform = "rotate(0deg)";
          setTimeout(() => {          
              homeSpeechBubble.style.visibility = "visible";
              homeSpeechBubble.style.opacity = 1;
          }, 700);
        }, 400);
      }, 400);
    } else if (index == 3) {
      weDoSlide.style.top = "-200%";
      weDoBar.style.top = "-200%";
      weAreSlide.style.top = "-100%";
      weAreBar.style.top = "-100%";
      weGuideSlide.style.top = "0";
      weGuideBar.style.top = "0";

      setTimeout(() => {
        globeBalloonSmall.style.opacity = 0;
        homeSpeechBubble.style.cssText = "visibility: hidden; opacity: 0;";
        setTimeout(() => {
        homeUfoGroup.style.bottom = "60%";      
        globeLighthouse.style.cssText = "visibility: visible; opacity: 1;";
        setTimeout(() => {
          laser.forEach((lb, index) => {
            lb.style.animation = `laser ${6 + 0.5 * index}s infinite`;
          });
        }, 50);
      }, 1000);
    }, 400);
    }
    setTimeout(() => {
      globeCore.style.transform = "rotate(" + degrees + "deg)";
      globeCore.style.transitionDuration = duration+"s";
    }, 189);
  }
  
  const rotateWorldOnClick = (element, degrees, axisX, axisY) => {
    element.addEventListener('click', () => rotateWorld(degrees, axisX, axisY));
  };
  
  rotateWorldOnClick(globeBalloon, 94, 2, 2);
  rotateWorldOnClick(homeSpeechBubble, 245, 3, 2);
  rotateWorldOnClick(arrowSignImg, 0, 1, 2);
};