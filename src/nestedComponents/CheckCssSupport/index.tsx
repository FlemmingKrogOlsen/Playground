import styled from "styled-components";
import BrowserDetect from "helpers/getBrowserName";

interface CheckProps {
  testValue: string;
  name: string;
}

export const CheckSupport = styled.div<CheckProps>`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  font-size: 10px;
  background: ${(props) => props.theme.BOOLEAN.TRUE};
  @supports not (${(props) => props.name + ":" + props.testValue}) {
    background: ${(props) => props.theme.BOOLEAN.FALSE};
  }
`;

const Container = styled.div`
  display: flex;
  text-align: left;
  padding: 5px;
`;

const CheckCSSSupport = (props: CheckProps) => {
  return (
    <Container>
      <CheckSupport
        testValue={props.testValue}
        name={BrowserDetect() + " @supports : " + props.name}
      />
      <div>{props.name}</div>
    </Container>
  );
};

export default CheckCSSSupport;
