type Playground_Accordion_Item = {
  id: number;
  title: string;
  content: React.FC;
  show: boolean;
};

interface Playground_AccordionProps {
  data: Array<Playground_Accordion_Item>;
  id: string;
}

type Palyground_Accordion_Colors_Headers_Item = {
  background: string;
  text: string;
};

type Palyground_Accordion_Colors = {
  border: string;
  header: {
    active: Palyground_Accordion_Colors_Headers_Item;
    inactive: Palyground_Accordion_Colors_Headers_Item;
    hover: string;
  };
  content: {
    backgroundColor: string;
    textColor: string;
  };
};
