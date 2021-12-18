import { FC } from "react";

import BorderPage from "./pages/Border";
import FlexBoxPage from "./pages/FlexBox";
import FontPage from "./pages/Font";
import TextAlignPage from "./pages/TextAlign";

interface ComponentPage {
  id: number;
  name: string;
  component: FC;
  tags: string[]; // keep tags lowercase
}

let componentPages: ComponentPage[] = [
  {
    id: 1,
    name: "FlexBox",
    component: FlexBoxPage,
    tags: [
      "flexbox",
      "display: flex",
      "flex-direction",
      "gap",
      "justify-content",
      "align-items",
    ],
  },
  {
    id: 2,
    name: "Border",
    component: BorderPage,
    tags: [
      "border",
      "border-color",
      "border-style",
      "border-width",
      "border-radius",
    ],
  },
  {
    id: 3,
    name: "Text Align",
    component: TextAlignPage,
    tags: ["text-align"],
  },
  {
    id: 4,
    name: "Font",
    component: FontPage,
    tags: ["font-size", "font-weight"],
  },
];

export const getCssPages = () =>
  componentPages.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

export const getCssPage = (id: number) =>
  componentPages.find((page) => page.id === id);
