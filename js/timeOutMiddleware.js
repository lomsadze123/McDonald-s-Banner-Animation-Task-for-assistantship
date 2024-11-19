export const addTimeOutMiddleware = (target, className, delay, callBack) => {
  let timeOut;

  if (timeOut) {
    clearTimeout(timeOut);
  }

  timeOut = setTimeout(() => {
    if (callBack) {
      callBack();
    } else {
      target.classList.add(className);
    }
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
