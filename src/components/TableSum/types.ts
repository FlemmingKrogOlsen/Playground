
type row = {
  title: string
  values: Array<number>
}

export interface IProps {
  data: {
    headers: Array<string>
    rows: Array<row>
  }
  sum?: boolean
  total?: boolean
  title?: string
}