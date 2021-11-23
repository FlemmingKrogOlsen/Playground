export interface IProps {
    children: React.ReactNode;
    value: number;
    colors?: {
      cardTextColor?: string;
      cardBackground?: string;
      barBackground?: string;
      barColor?: string;
      barTextHoverColor?: string;
      barTextColor?: string;
    };
  }
  