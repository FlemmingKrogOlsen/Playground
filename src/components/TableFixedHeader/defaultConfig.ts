import { configType } from "./types";

export const defaultConfig: configType = {
    maxRows: 10,
    backgrondColor: "#123456",
    captionTextColor: "#ffffff",
    header: {
        backgroundColor: "#ffffff",
        textColor: "#123456",
    },
    body: {
        odd: {
            backgroundColor: "#d3d3d3",
            textColor: "#000000",
        },
        even: {
            backgroundColor: "#dedede",
            textColor: "#000000",
        },
        hover: {
            backgroundColor: "gray",
            textColor: "#ffffff",
        },
    },
    footer: {
        textColor: "#ffffff",
    },
};