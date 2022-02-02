import { FC, ReactElement } from "react";
import { StyledBtn } from "./styled";
import type { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  type,
  title,
  icon,
  onClick,
}): ReactElement => (
  <StyledBtn onClick={onClick} type={type ? type : "button"}>
    <div>{icon}</div>
    <div>{title}</div>
  </StyledBtn>
);

export default Button;
