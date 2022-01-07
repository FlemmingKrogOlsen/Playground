import { CloseButton, Container, Header, Overlay } from "./styled";
import { IProps } from "./types";

const Modal = ({ children, title, show, onClose }: IProps) => {
  return (
    <>
      <Container show={show}>
        <Header>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        {children}
      </Container>
      <Overlay show={show} onClick={onClose} />
    </>
  );
};

export default Modal;
