export type ShowType = {
  show: boolean;
};

export interface IProps extends ShowType {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}
