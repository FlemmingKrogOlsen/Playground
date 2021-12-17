import { FC } from "react";

import BlankPage from "./pages/Blank";
import FlexBoxPage from "./pages/FlexBox";

interface ComponentPage {
  id: number;
  name: string;
  component: FC;
  tags: string[] // keep tags lowercase
}

let componentPages: ComponentPage[] = [
  {
    id: 1,
    name: "FlexBox",
    component: FlexBoxPage,
    tags: ["flexbox","display: flex", "flex-direction", "gap", "align-items", "justify-content"],
  },
  {
    id: 2,
    name: "Blank Page",
    component: BlankPage,
    tags: ["blank","page"],
  },
];

export const getCssPages = () =>
  componentPages.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

export const getCssPage = (id: number) =>
  componentPages.find((page) => page.id === id);
