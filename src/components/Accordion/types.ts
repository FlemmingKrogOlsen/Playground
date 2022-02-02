type Item = {
  id: number;
  title: string;
  body: React.FC;
  show: boolean;
};

export default interface Props {
  id: string;
  data: Item[];
}

type ElementColors = {
  background: string;
  text: string;
};

export interface Colors {
  border: string;
  header: {
    active: ElementColors;
    inactive: ElementColors;
    hover: string;
  };
  body: ElementColors;
}
