export const PageScrollCustomStyle = (stateFunc, hightSize) => {
  const colorChance = () => {
    if (window.scrollY >= hightSize) {
      stateFunc(true);
    } else {
      stateFunc(false);
    }
  };

  return window.addEventListener("scroll", colorChance);
};
