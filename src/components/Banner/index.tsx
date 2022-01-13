import { useState } from "react";
import { Container } from "./styled";

type BannerProps = {
  image: string;
  children: React.ReactNode;
  info: string;
};

export const Banner = ({ image, children, info }: BannerProps) => {
  const [show, setShow] = useState(false);
  return (
    <Container show={show}>
      <img src={image} onLoad={() => setShow(true)} alt={info} />
      <section>{children}</section>
      <footer>{info}</footer>
    </Container>
  );
};

export default Banner;
