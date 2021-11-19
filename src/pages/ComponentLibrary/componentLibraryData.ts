import { FC } from 'react';

import ProgressIndicatorCardPage from './pages/ProgressIndicatorCardPage'
import InfoCardPage from './pages/InfoCardPage'

interface ComponentPage {
  name: string,
  id: number,
  component: FC
}



let componentPages: ComponentPage[] = [
  {
    name: "Progress Indicator Card",
    id: 1,

    component: ProgressIndicatorCardPage,
  },
  {
    name: "Info Card",
    id: 2,
    component: InfoCardPage,
  }
];

export const getComponentPages = () => componentPages;

export const getComponentPage = (id: number) => componentPages.find(page => page.id === id);

export const deleteComponentPage = (id: number) => {
  componentPages = componentPages.filter(
    page => page.id !== id
  );
}