import {
  addTimeOutMiddleware,
  removeTimeOutMiddleware,
} from "./timeOutMiddleware.js";

document.addEventListener("DOMContentLoaded", () => {
  const handleHeadlinePriceAnimation = () => {
    const headlinePrice = document.getElementById("headline-price");

    addTimeOutMiddleware(headlinePrice, "show", 1000);
    removeTimeOutMiddleware(headlinePrice, "show", 3000);
  };

  const handleStripesAnimation = () => {
    const stripes = document.querySelectorAll(".stripes div");

    for (let i = 0; i < stripes.length; i++) {
      let delay = 50 * i;
      const element = stripes[i];
      addTimeOutMiddleware(element, "show", 1500 + delay);
    }
  };

  const handleBigBangAnimation = (delay) => {
    const bigBang = document.getElementById("big-bang");
    addTimeOutMiddleware(bigBang, "show", delay);
  };

  const handleChickenPaprikaAnimation = () => {
    const chickenPaprika = document.getElementById("chicken-paprika");
    addTimeOutMiddleware(chickenPaprika, "show", 4000);
  };

  const handleReusableChanges = ({ delay, bgColor, chickenPaprikaImage }) => {
    setTimeout(() => {
      const body = document.body;
      body.style.backgroundColor = bgColor;

      const bigBang = document.getElementById("big-bang");
      removeTimeOutMiddleware(bigBang, "show", 1);
      handleBigBangAnimation(1000);

      const stripes = document.querySelectorAll(".stripes div");
      stripes.forEach((stripe) => {
        removeTimeOutMiddleware(stripe, "show", 0);
      });
      handleStripesAnimation();

      const chickenPaprika = document.getElementById("chicken-paprika");
      removeTimeOutMiddleware(chickenPaprika, "show", 0);

      setTimeout(() => {
        const paprikaImg = chickenPaprika.querySelector("img");
        paprikaImg.src = chickenPaprikaImage;
        chickenPaprika.classList.add("show");
      }, 1000);
    }, delay);
  };

  handleHeadlinePriceAnimation();
  handleStripesAnimation();
  handleBigBangAnimation(3500);
  handleChickenPaprikaAnimation();

  handleReusableChanges({
    delay: 5000,
    bgColor: "#172a53",
    chickenPaprikaImage: "assets/txt_filet-o-fish.png",
  });

  handleReusableChanges({
    delay: 8000,
    bgColor: "#16b8a1",
    chickenPaprikaImage: "assets/txt_double_cheeseburger.png",
  });
});
