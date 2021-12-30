import { FC } from "react";

import BorderPage, { borderSearchableTags } from "./pages/Border";
import FlexBoxPage, { flexboxSearchableTags } from "./pages/FlexBox";
import FontPage, { fontSearchableTags } from "./pages/Font";
import TextAlignPage, { textAlignSearchableTags } from "./pages/TextAlign";

interface ComponentPage {
  id: number;
  name: string;
  component: FC;
  tags: string[];
}

let componentPages: ComponentPage[] = [
  {
    id: 1,
    name: "FlexBox",
    component: FlexBoxPage,
    tags: flexboxSearchableTags,
  },
  {
    id: 2,
    name: "Border",
    component: BorderPage,
    tags: borderSearchableTags,
  },
  {
    id: 3,
    name: "Text Align",
    component: TextAlignPage,
    tags: textAlignSearchableTags,
  },
  {
    id: 4,
    name: "Font",
    component: FontPage,
    tags: fontSearchableTags,
  },
];

export const getCssPages = () =>
  componentPages.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

export const getCssPage = (id: number) =>
  componentPages.find((page) => page.id === id);
