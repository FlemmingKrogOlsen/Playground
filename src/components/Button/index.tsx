import { FC, ReactElement } from "react";
import { IButton } from "./types";
import { StyledBtn } from "./styled";

const Button: FC<IButton> = ({ title, icon, onClick }): ReactElement => (
  <StyledBtn onClick={onClick}>
    <div>{icon}</div>
    <div>{title}</div>
  </StyledBtn>
);

export default Button;
