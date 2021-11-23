import { FC } from 'react';

import ProgressIndicatorCardPage from './pages/ProgressIndicatorCardPage'
import InfoCardPage from './pages/InfoCardPage'
import DragNDropPage from './pages/DragNDropPage'
import TableFixedHeaderPage from './pages/TableFixedHeaderPage'

interface ComponentPage {
  name: string,
  id: number,
  component: FC
}

let componentPages: ComponentPage[] = [
  {
    name: "Progress Pie Card",
    id: 1,

    component: ProgressIndicatorCardPage,
  },
  {
    name: "Info Card",
    id: 2,
    component: InfoCardPage,
  },
  {
    name: "Drag 'N Drop",
    id: 3,
    component: DragNDropPage,
  },
  {
    name: "Table Fixed Header",
    id: 4,
    component: TableFixedHeaderPage,
  }
];




export const getComponentPages = () => componentPages;

export const getComponentPage = (id: number) => componentPages.find(page => page.id === id);

export const deleteComponentPage = (id: number) => {
  componentPages = componentPages.filter(
    page => page.id !== id
  );
}