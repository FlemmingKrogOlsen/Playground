interface Playground_CustumTable_RowLayout {
  header?: boolean
}

interface Playground_CustumTable_Col {
  activeCol: boolean
}


interface Playground_CustumTable_Header {
  title: string | null
  name: string | null
  align?: string | undefined
  headerAlign?: string | undefined
  sortName?: string | undefined
  width?: string | undefined
}

interface Playground_CustumTableProps {
  data: Array<any>;
  headers: Array<IHeader>;
  state: boolean;
  sortBy?: string;
}