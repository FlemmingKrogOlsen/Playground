import { ReactElement, useState } from "react";
import { Container } from "./styled";
import type Props from "./types";

export const Banner = ({ image, children, info }: Props): ReactElement => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Container show={show}>
      <img src={image} onLoad={() => setShow(true)} alt={info} />
      <section>{children}</section>
      <footer>{info}</footer>
    </Container>
  );
};

export default Banner;
