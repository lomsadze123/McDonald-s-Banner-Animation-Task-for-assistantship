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

  handleHeadlinePriceAnimation();
  handleStripesAnimation();
});
