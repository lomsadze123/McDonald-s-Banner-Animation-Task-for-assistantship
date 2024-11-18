export const addTimeOutMiddleware = (target, className, delay) => {
  let timeOut;

  if (timeOut) {
    clearTimeout(timeOut);
  }

  timeOut = setTimeout(() => {
    target.classList.add(className);
  }, delay);
};

export const removeTimeOutMiddleware = (target, className, delay) => {
  let timeOut;

  if (timeOut) {
    clearTimeout(timeOut);
  }

  timeOut = setTimeout(() => {
    target.classList.remove(className);
  }, delay);
};
