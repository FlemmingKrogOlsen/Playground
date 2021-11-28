// import PropTypes, { InferProps } from 'prop-types';
// import prop_children from '../../types/prop_children';

// const prop_color = {
//   color: PropTypes.string,
//   shadow: PropTypes.bool,
//   border: PropTypes.bool,
// };

// const prop_types = {
//   ...prop_color,
//   title: PropTypes.string.isRequired,
//   children: prop_children.isRequired,
//   component: PropTypes.element,
// };

// type IProps = InferProps<typeof prop_types>;
// type IColor = InferProps<typeof prop_color>;

// export { prop_color, prop_types };
// export type { IProps, IColor };

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