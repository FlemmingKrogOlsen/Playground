import isBrowser from "./isBrowser"

const setValueFormat = (value: number, digits: number): string =>
  isBrowser
    ? value.toLocaleString(navigator.language, {
        minimumFractionDigits: digits,
      })
    : value.toString()

export default setValueFormat
