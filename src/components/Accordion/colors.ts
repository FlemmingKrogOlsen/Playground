import type { Colors } from "./types";

const primaryColor: string = "#123456";

export const colors: Colors = {
  border: primaryColor,
  header: {
    active: {
      background: primaryColor,
      text: "white",
    },
    inactive: {
      background: primaryColor,
      text: "#dadada",
    },
    hover: "steelblue",
  },
  body: {
    background: "#fff",
    text: primaryColor,
  },
};
