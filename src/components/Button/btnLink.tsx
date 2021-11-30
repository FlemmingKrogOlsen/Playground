import { FC, ReactElement } from "react";
import { IButtonLink } from "./types";
import { StyledLink } from "./styled";

const ButtonLink: FC<IButtonLink> = ({ title, icon, url }): ReactElement => (
  <StyledLink
    href={url}
    target={url.startsWith("http") ? "_blank" : "_self"}
    rel="noreferrer"
  >
    {icon}
    {title}
  </StyledLink>
);

export default ButtonLink;
