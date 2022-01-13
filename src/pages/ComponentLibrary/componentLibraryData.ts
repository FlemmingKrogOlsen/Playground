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
import ModalPage from "./pages/Modal";
import BannerPage from "./pages/Banner";

interface ComponentPage {
  id: number;
  name: string;
  github: string;
  component: FC;
}

let componentPages: ComponentPage[] = [
  {
    id: 1,
    name: "Progress Pie Card",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/ProgressPieCard",
    component: ProgressIndicatorCardPage,
  },
  {
    id: 2,
    name: "Info Card",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/InfoCard",
    component: InfoCardPage,
  },
  {
    id: 3,
    name: "Drag 'N Drop",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/DragNDrop",
    component: DragNDropPage,
  },
  {
    id: 4,
    name: "Table Fixed Header",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/TableFixedHeader",
    component: TableFixedHeaderPage,
  },
  {
    id: 5,
    name: "Table with Sum",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/TableSum",
    component: TableWithSumPage,
  },
  {
    id: 6,
    name: "Flip Card",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/FlipCard",
    component: FlipCardPage,
  },
  {
    id: 7,
    name: "Section Progress",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/SectionProgress",
    component: SectionProgressPage,
  },
  {
    id: 8,
    name: "Tabs",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/Tabs",
    component: TabsPage,
  },
  {
    id: 9,
    name: "Details Summary",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/DetailsSummary",
    component: DetailsSummaryPage,
  },
  {
    id: 10,
    name: "Accordion",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/Accordion",
    component: AccordionPage,
  },
  {
    id: 11,
    name: "Spinners",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/Spinner",
    component: SpinnersPage,
  },
  {
    id: 12,
    name: "Section",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/Section",
    component: SectionPage,
  },
  {
    id: 13,
    name: "Form Elements",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/FormElements",
    component: FormElements,
  },
  {
    id: 14,
    name: "Buttons",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/Button",
    component: ButtonsPage,
  },
  {
    id: 15,
    name: "Custom Table",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/CustomTable",
    component: CustomTablePage,
  },
  {
    id: 16,
    name: "Radio Cards",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/RadioCards",
    component: RadioCardsPage,
  },
  {
    id: 17,
    name: "Modal Page",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/Modal",
    component: ModalPage,
  },
  {
    id: 18,
    name: "Banner Image",
    github: "https://github.com/FlemmingKrogOlsen/Playground/tree/main/src/components/Banner",
    component: BannerPage,
  },
];

export const getComponentPages = () =>
  componentPages.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

export const getComponentPage = (id: number) =>
  componentPages.find((page) => page.id === id);
