import isBrowser from "./isBrowser"

const FormatDKK = (value: number, digits: number): string =>
  isBrowser
    ? value.toLocaleString(navigator.language, {
        minimumFractionDigits: digits,
      })
    : value.toString()

export default FormatDKK
