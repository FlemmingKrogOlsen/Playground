export interface IRow {
  header?: boolean;
}

export interface ICol {
  activeCol: boolean;
}

export type IHeader = {
  title: string | null;
  name: string | null;
  align?: string | undefined;
  headerAlign?: string | undefined;
  sortName?: string | undefined;
  width?: string | undefined;
};

export interface IProps {
  data: Array<any>;
  headers: Array<IHeader>;
  state: boolean;
  sortBy?: string;
}
