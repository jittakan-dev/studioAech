export const homeModule = () => {
  const globeCore = document.querySelector(".home-globe-container");
  const globeBalloon = document.querySelector(".home-globe-balloon");
  const globeBalloonBg = document.querySelector(".home-globe-balloon-bg");
  const globeBalloonSmall = document.querySelector(".home-globe-balloon-small");
  const globeWheel = document.querySelector(".home-globe-wheel-group");
  const arrowSignImg = document.querySelector(".home-arrow-sign");
  const bearItems = document.querySelectorAll(".home-bear-item");
  const homeSpeechBubble = document.querySelector(".home-speechBubble");
  const globeLighthouse = document.querySelector(".home-globe-lighthouse");
 
  const lb0 = document.querySelector(".lb0");
  const lb1 = document.querySelector(".lb1");
  const lb2 = document.querySelector(".lb2");
  const lb3 = document.querySelector(".lb3");

  const weDoTitle = document.querySelectorAll(".home-slide-we-do-title");
  const weAreTitle = document.querySelectorAll(".home-slide-we-are-title");
  const weGuideTitle = document.querySelectorAll(".home-slide-we-guide-title");

  const weDoSlide = document.querySelector(".home-slide-we-do-body");
  const weAreSlide = document.querySelector(".home-slide-we-are-body");
  const weGuideSlide = document.querySelector(".home-slide-we-guide-body");

  const weDoBar = document.querySelector(".home-bar-we-do");
  const weAreBar = document.querySelector(".home-bar-we-are");
  const weGuideBar = document.querySelector(".home-bar-we-guide");

  const homeBalloonTitleContainer = document.querySelector(".home-balloon-title-container");
  const homeBalloonTitle = document.querySelector(".home-balloon-title");

  const homeUfoGroup = document.querySelector(".home-ufo-group");


  let isRotationAllowed = false;

  function rotateWorld(degrees, index) {
    var buttons = document.querySelectorAll(".home-dot-container div"); /*---------------------------*/
    buttons.forEach(function (button) {
      button.classList.remove("home-dot-active");
    });
    var activeButton = buttons[index - 1];
    activeButton.classList.add("home-dot-active");

    if (index == 1) {
      shuffleItems(false);
      // weDoSlide.style.top = "0";
      // weDoBar.style.top = "0";
      // weAreSlide.style.top = "100%";
      // weAreBar.style.top = "100%";
      // weGuideSlide.style.top = "200%";
      // weGuideBar.style.top = "200%";

      weDoTitle.forEach((weDoTitle, index) => {
        setTimeout(() => {
          weDoTitle.style.top = "0";
        }, index * 20);
      });
      weAreTitle.forEach((weAreTitle, index) => {
        setTimeout(() => {
          weAreTitle.style.top = "100%";
        }, index * 20);
      });
      weGuideTitle.forEach((weGuideTitle, index) => {
        setTimeout(() => {
          weGuideTitle.style.top = "200%";
        }, index * 20);
      });

      setTimeout(() => {
        homeSpeechBubble.style.visibility = "hidden";
        homeSpeechBubble.style.opacity = 0;
        globeLighthouse.style.visibility = "hidden";
        globeLighthouse.style.opacity = 0;
        homeUfoGroup.style.bottom = "120%";
        setTimeout(() => {
          lb0.style.animation = "none";
          lb1.style.animation = "none";
          lb2.style.animation = "none";
          lb3.style.animation = "none";
        }, 400);
      }, 400);

      if (isRotationAllowed) {     
        setTimeout(() => {          
          globeBalloon.style.transform = "rotate(10deg)";
          globeBalloonBg.style.transform = "rotate(10deg)";
          globeBalloonSmall.style.transform = "rotate(10deg)";
          globeWheel.style.transform = "rotate(10deg)";
          setTimeout(() => {
            setTimeout(() => {
              weDoSlide.style.top = "0";
              weDoBar.style.top = "0";
              weAreSlide.style.top = "100%";
              weAreBar.style.top = "100%";
              weGuideSlide.style.top = "200%";
              weGuideBar.style.top = "200%";
            }, 500);
            globeBalloon.style.transform = "rotate(-20deg)";
            globeBalloonBg.style.transform = "rotate(-20deg)";
            globeBalloonSmall.style.transform = "rotate(-20deg)";
            globeWheel.style.transform = "rotate(-20deg)";
            homeBalloonTitleContainer.style.opacity="1";
            homeBalloonTitle.style.top ="0";
            setTimeout(() => {
              globeBalloon.style.transform = "rotate(0deg)";
              globeBalloonBg.style.transform = "rotate(0deg)";
              globeBalloonSmall.style.transform = "rotate(0deg)";
              globeWheel.style.transform = "rotate(0deg)";
              isRotationAllowed = false;
              globeBalloonSmall.style.opacity = 1;

            }, 500);
          }, 720);
        }, 700);
      }
    } else if (index == 2) {    
      shuffleItems(true);
      isRotationAllowed = true;
      // weDoSlide.style.top = "-100%";
      // weDoBar.style.top = "-100%";
      // weAreSlide.style.top = "0";
      // weAreBar.style.top = "0";
      // weGuideSlide.style.top = "100%";
      // weGuideBar.style.top = "100%";

      setTimeout(() => {
        homeBalloonTitleContainer.style.opacity="0";
        homeBalloonTitle.style.top ="100%";
      }, 100);

      weDoTitle.forEach((weDoTitle, index) => {
        setTimeout(() => {
          weDoTitle.style.top = "-100%";
        }, index * 20);
      });
      weAreTitle.forEach((weAreTitle, index) => {
        setTimeout(() => {
          weAreTitle.style.top = "0";
        }, index * 20);
      });
      weGuideTitle.forEach((weGuideTitle, index) => {
        setTimeout(() => {
          weGuideTitle.style.top = "100%";
        }, index * 20);
      });
      setTimeout(() => {
        globeBalloonSmall.style.opacity = 0;
        globeLighthouse.style.visibility = "hidden";
        globeLighthouse.style.opacity = 0;
        homeUfoGroup.style.bottom = "120%";
        setTimeout(() => {
          lb0.style.animation = "none";
          lb1.style.animation = "none";
          lb2.style.animation = "none";
          lb3.style.animation = "none";
        }, 400);
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
            weDoSlide.style.top = "-100%";
            weDoBar.style.top = "-100%";
            weAreSlide.style.top = "0";
            weAreBar.style.top = "0";
            weGuideSlide.style.top = "100%";
            weGuideBar.style.top = "100%";
          }, 500);
          setTimeout(() => {
            setTimeout(() => {            
              homeSpeechBubble.style.visibility = "visible";
              homeSpeechBubble.style.opacity = 1;
            }, 400);
          }, 900);
        }, 400);
      }, 400);
    } else if (index == 3) {
      shuffleItems(false);
      isRotationAllowed = true;
      // weDoSlide.style.top = "-200%";
      // weDoBar.style.top = "-200%";
      // weAreSlide.style.top = "-100%";
      // weAreBar.style.top = "-100%";
      // weGuideSlide.style.top = "0";
      // weGuideBar.style.top = "0";

      weDoTitle.forEach((weDoTitle, index) => {
        setTimeout(() => {
          weDoTitle.style.top = "-200%";
        }, index * 20);
      });
      weAreTitle.forEach((weAreTitle, index) => {
        setTimeout(() => {
          weAreTitle.style.top = "-100%";
        }, index * 20);
      });
      weGuideTitle.forEach((weGuideTitle, index) => {
        setTimeout(() => {
          weGuideTitle.style.top = "0";
        }, index * 20);
      });
      setTimeout(() => {
        globeBalloonSmall.style.opacity = 0;
        homeSpeechBubble.style.visibility = "hidden";
        homeSpeechBubble.style.opacity = 0;
      }, 400);
      setTimeout(() => {
        homeUfoGroup.style.bottom = "60%";
      setTimeout(() => {
        setTimeout(() => {
          lb0.style.animation = "laser 6s infinite";
          lb1.style.animation = "laser 6.5s infinite";
          lb2.style.animation = " laser 7s infinite";
          lb3.style.animation = "laser 7.5s infinite";
        }, 50);
        globeLighthouse.style.visibility = "visible";
        globeLighthouse.style.opacity = 1;

      }, 1200);
      setTimeout(() => {
        weDoSlide.style.top = "-200%";
        weDoBar.style.top = "-200%";
        weAreSlide.style.top = "-100%";
        weAreBar.style.top = "-100%";
        weGuideSlide.style.top = "0";
        weGuideBar.style.top = "0";
      }, 700);
    }, 1200);
    }
    setTimeout(() => {
      globeCore.style.transform = "rotate(" + degrees + "deg)";
    }, 189);
  }

  let shuffleInterval;

  function shuffleItems(shouldShuffle) {
    if (!shouldShuffle) {
      clearInterval(shuffleInterval); 
      return;
    }

    bearItems.forEach((item) => {
      item.classList.remove("home-bear-active");
    });

    const shuffledItems = Array.from(bearItems).sort(() => Math.random() - 0.5);
    shuffledItems[0].classList.add("home-bear-active");

    shuffleInterval = setTimeout(() => {
      shuffleItems(shouldShuffle);
    }, 379);
  }

  document.getElementById('wb-1').addEventListener('click', function() {
    rotateWorld(0, 1);
  });
  document.getElementById('wb-2').addEventListener('click', function() {
    rotateWorld(94, 2); //461
  });
  document.getElementById('wb-3').addEventListener('click', function() {
    rotateWorld(245, 3);
  });
  globeBalloon.addEventListener('click', function() {
    rotateWorld(94, 2); //461
  });
  homeSpeechBubble.addEventListener('click', function() {
    rotateWorld(245, 3);
  });
  arrowSignImg.addEventListener('click', function() {
    rotateWorld(0, 1);
  });
};