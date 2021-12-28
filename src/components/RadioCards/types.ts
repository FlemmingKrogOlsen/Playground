type OptionType = {
  id: string;
  value: string;
  title: string;
  icon: string;
  paragraph: string;
  disabled?: boolean;
};

export interface IProps {
  data: {
    id: string;
    options: OptionType[];
  };
  value: string;
  setValue: (value: string) => void;
}
