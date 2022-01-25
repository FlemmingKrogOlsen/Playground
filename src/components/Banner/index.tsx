import { ReactElement, useState } from "react";
import { Container } from "./styled";

export const Banner = ({
  image,
  children,
  info,
}: Playground_BannerProps): ReactElement => {
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
