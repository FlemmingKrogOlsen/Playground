import { FC, ReactElement } from "react";
import { StyledBtn } from "./styled";

const Button: FC<Playground_ButtonProps> = ({ type, title, icon, onClick }): ReactElement => (
  <StyledBtn onClick={onClick} type={type ? type : "button"}>
    <div>{icon}</div>
    <div>{title}</div>
  </StyledBtn>
);

export default Button;
