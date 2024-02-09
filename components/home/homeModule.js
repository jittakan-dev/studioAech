export const homeModule = () => {
const globeCore = document.querySelector(".home-globe-container");
const globeBalloon = document.querySelector(".home-globe-balloon");
const globeBalloonBg = document.querySelector(".home-globe-balloon-bg");
const globeBalloonSmall = document.querySelector(".home-globe-balloon-small");
const globeBalloonImg = document.querySelector(".home-globe-balloon img");
const globeWheel = document.querySelector(".home-globe-wheel-group");
const arrowSignImg = document.querySelector(".home-arrow-sign");
const globeBear = document.querySelector(".home-globe-bear");
const bearItems = document.querySelectorAll(".home-bear-item");
const homeSpeechBubble = document.querySelector(".home-speechBubble");
const globeBearEffect = document.querySelector(".home-globe-bear-effect");
const globeLighthouse = document.querySelector(".home-globe-lighthouse");

const lb0 = document.querySelector(".lb0");
const lb1 = document.querySelector(".lb1");
const lb2 = document.querySelector(".lb2");
const lb3 = document.querySelector(".lb3");

//Calculate size of flip container???
const worldSubText = document.querySelector(".world-sub-text");

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

function changeInBalloon() {

  globeBalloonImg.style.filter =
    "drop-shadow(-1rem 0 6rem #288A8F) brightness(110%)";
}
function changeOutBalloon() {

  globeBalloonImg.style.filter =
    "drop-shadow(0.07rem 0.2rem 0.8rem rgba(0, 0, 0,0.6)) brightness(90%)";
}

let isRotationAllowed = false;

function rotateWorld(degrees, index) {
  var buttons = document.querySelectorAll(".home-dot-container div"); /*---------------------------*/
  buttons.forEach(function (button) {
    button.classList.remove("home-dot-active");
  });
  var activeButton = buttons[index - 1];
  activeButton.classList.add("home-dot-active");

  if (index == 1) {
    // meteor(true);
    shuffleItems(false);

        weDoSlide.style.top = "0";
        weDoBar.style.top = "0";

        weAreSlide.style.top = "100%";
        weAreBar.style.top = "100%";

        weGuideSlide.style.top = "200%";
        weGuideBar.style.top = "200%";

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
      globeBearEffect.style.visibility = "hidden";
      globeBearEffect.style.opacity = 0;
      homeSpeechBubble.style.visibility = "hidden";
      homeSpeechBubble.style.opacity = 0;
      globeLighthouse.style.visibility = "hidden";
      globeLighthouse.style.opacity = 0;
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
        // weDo.style.top = "-100%";
        // weAre.style.top ="0";
        // weGuide.style.top = "100%";

        weDoSlide.style.top = "-100%";
        weDoBar.style.top = "-100%";
        setTimeout(() => {
          homeBalloonTitleContainer.style.opacity="0";
          homeBalloonTitle.style.top ="100%";
        }, 100);
        weAreSlide.style.top = "0";
        weAreBar.style.top = "0";

        weGuideSlide.style.top = "100%";
        weGuideBar.style.top = "100%";

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
          setTimeout(() => {
            globeBearEffect.style.visibility = "visible";
            globeBearEffect.style.opacity = 1;            
            homeSpeechBubble.style.visibility = "visible";
            homeSpeechBubble.style.opacity = 1;
            // meteor(false);
          }, 500);
        }, 900);
      }, 400);
    }, 400);
  } else if (index == 3) {
    // meteor(true);    
    shuffleItems(false);
    isRotationAllowed = true;

        // weDo.style.top = "-200%";

        // weAre.style.top = "-100%";

        // weGuide.style.top = "0";

        weDoSlide.style.top = "-200%";
        weDoBar.style.top = "-200%";

        weAreSlide.style.top = "-100%";
        weAreBar.style.top = "-100%";

        weGuideSlide.style.top = "0";
        weGuideBar.style.top = "0";

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
      globeBearEffect.style.visibility = "hidden";
      globeBearEffect.style.opacity = 0;
      homeSpeechBubble.style.visibility = "hidden";
      homeSpeechBubble.style.opacity = 0;
    }, 400);
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
  }

  setTimeout(() => {
    globeCore.style.transform = "rotate(" + degrees + "deg)";
  }, 189);
}

let countMeteor = 0;
let amountMeteor = 0;

function meteor(stopflag) {
  amountMeteor = 100;
  let container = document.querySelector(".home-globe-bear-effect");  /*---------------------------*/
  stopflag = stopflag || false;
  while (countMeteor < amountMeteor && !stopflag) {
    let drop = document.createElement("div");
    drop.className = "droplet";
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * container.offsetWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;
    drop.style.width = 0.1 + size + "px";
    drop.style.left = posX + "px";
    drop.style.animationDelay = delay + "s";
    drop.style.animationDuration = 6 + duration + "s";
    container.appendChild(drop);
    countMeteor++;
  }
  if (stopflag === true) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
     amountMeteor = 70;
     countMeteor = 0;
  }
}

document.getElementById('wb-1').addEventListener('click', function() {
rotateWorld(0, 1);
});

document.getElementById('wb-2').addEventListener('click', function() {
rotateWorld(93, 2); //461
});

document.getElementById('wb-3').addEventListener('click', function() {
rotateWorld(248, 3);
});

globeBalloon.addEventListener('click', function() {
  rotateWorld(93, 2); //461
  });
homeSpeechBubble.addEventListener('click', function() {
  rotateWorld(248, 3);
});
arrowSignImg.addEventListener('click', function() {
rotateWorld(0, 1);
});

// globeBalloon.addEventListener('mouseover',changeInBalloon);
// globeBalloon.addEventListener('mouseleave',changeOutBalloon);

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


};