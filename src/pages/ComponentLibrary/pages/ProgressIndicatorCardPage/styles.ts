import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const commonInputCss = css`
  width: 25px;
  height: 25px;
  background: #123456;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 50%;
`;

const Editor = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid gray;
  text-align: center;
  color: white;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  border-radius: 22px;

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: white;
    outline: none;
    border-radius: 12.5px;

    &::-webkit-slider-thumb {
      appearance: none;
      ${commonInputCss};
    }

    &::-moz-range-thumb {
      ${commonInputCss};
    }
  }
`;

const ColorPicker = styled.input.attrs({
  type: "color",
})`
  width: 50px;
  height: 50px;
  border: none;
`;

const CodeBlock = styled.div`
  margin-top: 20px;
  background: white;
  color: black;
  padding: 10px;
  border-radius: 7px;
  text-align: left;
`;

const Reset = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  color: red;
  font-size: 30px;
  line-height: 30px;
  background: transparent;
  border: 4px solid white;
`;

export { Container, Editor, ColorPicker, CodeBlock, Reset };