import { FC } from "react";

import ProgressIndicatorCardPage from "./pages/ProgressIndicatorCardPage";
import InfoCardPage from "./pages/InfoCardPage";
import DragNDropPage from "./pages/DragNDropPage";
import TableFixedHeaderPage from "./pages/TableFixedHeaderPage";
import TableWithSumPage from "./pages/TableWithSumPage";
import FlipCardPage from "./pages/FlipCardPage";
import SectionProgressPage from "./pages/SectionProgressPage";
import TabsPage from "./pages/TabsPage";
import DetailsSummaryPage from "./pages/DetailsSummaryPage";

interface ComponentPage {
  id: number;
  name: string;
  component: FC;
}

let componentPages: ComponentPage[] = [
  {
    id: 1,
    name: "Progress Pie Card",
    component: ProgressIndicatorCardPage,
  },
  {
    id: 2,
    name: "Info Card",
    component: InfoCardPage,
  },
  {
    id: 3,
    name: "Drag 'N Drop",
    component: DragNDropPage,
  },
  {
    id: 4,
    name: "Table Fixed Header",
    component: TableFixedHeaderPage,
  },
  {
    id: 5,
    name: "Table with Sum",
    component: TableWithSumPage,
  },
  {
    id: 6,
    name: "Flip Card",
    component: FlipCardPage,
  },
  {
    id: 7,
    name: "Section Progress",
    component: SectionProgressPage,
  },
  {
    id: 8,
    name: "Tabs",
    component: TabsPage,
  },
  {
    id: 9,
    name: "Details Summary",
    component: DetailsSummaryPage,
  },
];

export const getComponentPages = () => componentPages.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

export const getComponentPage = (id: number) =>
  componentPages.find((page) => page.id === id);

export const deleteComponentPage = (id: number) => {
  componentPages = componentPages.filter((page) => page.id !== id);
};
