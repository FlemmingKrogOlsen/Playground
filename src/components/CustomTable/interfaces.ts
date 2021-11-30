export interface IRowLayout {
  header?: boolean
}

export interface ICol {
  activeCol: boolean
}


export interface IHeader {
  title: string | null
  name: string | null
  align?: string | undefined
  headerAlign?: string | undefined
  sortName?: string | undefined
  width?: string | undefined
}