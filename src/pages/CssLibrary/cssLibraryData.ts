import { FC } from "react";

import BlankPage from "./pages/Blank";
import FlexBoxPage from "./pages/FlexDirection";

interface ComponentPage {
  id: number;
  name: string;
  component: FC;
}

let componentPages: ComponentPage[] = [
  {
    id: 1,
    name: "Flexbox",
    component: FlexBoxPage,
  },
  {
    id: 2,
    name: "Blank Page",
    component: BlankPage,
  },
];

export const getCssPages = () =>
  componentPages.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

export const getCssPage = (id: number) =>
  componentPages.find((page) => page.id === id);