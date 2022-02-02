// const useDarkMode = () => {
//   return window.matchMedia("(prefers-color-scheme: dark)").matches;
// };

// export default useDarkMode;

import { useEffect, useState } from "react";

export default function useDarkMode() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useState<boolean>(prefersDarkMode);
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode] as const;
}
