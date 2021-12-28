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
import AccordionPage from "./pages/Accordion";
import SpinnersPage from "./pages/Spinners";
import SectionPage from "./pages/SectionPage";
import FormElements from "./pages/FormElements";
import ButtonsPage from "./pages/ButtonsPage";
import CustomTablePage from "./pages/CustomTablePage";
import RadioCardsPage from "./pages/RadioCardsPage";

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
  {
    id: 10,
    name: "Accordion",
    component: AccordionPage,
  },
  {
    id: 11,
    name: "Spinners",
    component: SpinnersPage,
  },
  {
    id: 12,
    name: "Section",
    component: SectionPage,
  },
  {
    id: 13,
    name: "Form Elements",
    component: FormElements,
  },
  {
    id: 14,
    name: "Buttons",
    component: ButtonsPage,
  },
  {
    id: 15,
    name: "Custom Table",
    component: CustomTablePage,
  },
  {
    id: 16,
    name: "Radio Cards",
    component: RadioCardsPage,
  },
];

export const getComponentPages = () =>
  componentPages.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

export const getComponentPage = (id: number) =>
  componentPages.find((page) => page.id === id);
