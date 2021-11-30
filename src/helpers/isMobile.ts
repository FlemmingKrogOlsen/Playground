import isBrowser from "./isBrowser";

const isMobile = (): boolean => {
  if (!isBrowser) {
    return false;
  }
  return window.matchMedia("(max-width: 600px)").matches;
};

export default isMobile;
