import isBrowser from "./isBrowser"

const isMobile = (): boolean => {
  if (isBrowser) {
    if (window.matchMedia("(max-width: 600px)").matches) {
      // window width is at less than 600px
      return true
    } else {
      // window width is greater than 600px
      return false
    }
  }
  return false
}

export default isMobile
