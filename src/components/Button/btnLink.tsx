import { FC, ReactElement } from "react";
import { StyledLink } from "./styled";
import type { ButtonLinkProps } from "./types";

const ButtonLink: FC<ButtonLinkProps> = ({
  title,
  icon,
  url,
}): ReactElement => (
  <StyledLink
    href={url}
    target={url.startsWith("http") ? "_blank" : "_self"}
    rel="noreferrer"
  >
    <div>{icon}</div>
    <div>{title}</div>
  </StyledLink>
);

export default ButtonLink;
