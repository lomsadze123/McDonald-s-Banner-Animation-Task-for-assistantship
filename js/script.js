import {
  addTimeOutMiddleware,
  removeTimeOutMiddleware,
} from "./timeOutMiddleware.js";

document.addEventListener("DOMContentLoaded", () => {
  const handleHeadlinePriceChange = () => {
    const headlinePrice = document.getElementById("headline-price");

    addTimeOutMiddleware(headlinePrice, "show", 3000);
    removeTimeOutMiddleware(headlinePrice, "show", 6000);
  };

  handleHeadlinePriceChange();
});
