import { Url } from "layout/nested.pages";
import styled from "styled-components";

interface CheckProps {
  name: string;
  value: string;
}

const CheckSupport = styled.div<CheckProps>`
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  font-size: 10px;
  background: ${(props) => props.theme.BOOLEAN.TRUE};
  @supports not (${(props) => props.name + ":" + props.value}) {
    background: ${(props) => props.theme.BOOLEAN.FALSE};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const MDNLink = ({ name, value }: CheckProps) => (
  <Container>
    <Url href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${name}`}>
      MDN Web
    </Url>
    <CheckSupport value={value} name={name} />
  </Container>
);

export default MDNLink;
