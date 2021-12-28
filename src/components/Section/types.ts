export type IColor = {
  color?: string
  shadow?: boolean
  border?: boolean
}

export interface IProps extends IColor {
title: string
children: React.ReactNode
component?: React.ReactNode
}