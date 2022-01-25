type Playground_AccordionItem = {
  id: number;
  title: string;
  content: FC;
  show: boolean;
};

interface Playground_AccordionProps {
  data: Array<Playground_AccordionItem>;
  id: string;
}

type Palyground_Colors = {
  primary: string;
  secondary: string;
  inactiveText: string;
  hover: string;
};