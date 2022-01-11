import { FC, ReactElement } from "react";
import { IButton } from "./types";
import { StyledBtn } from "./styled";

const Button: FC<IButton> = ({ type, title, icon, onClick }): ReactElement => (
  <StyledBtn onClick={onClick} type={type ? type : "button"}>
    <div>{icon}</div>
    <div>{title}</div>
  </StyledBtn>
);

export default Button;
