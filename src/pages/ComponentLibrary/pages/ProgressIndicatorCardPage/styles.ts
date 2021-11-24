import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const commonInputCss = css`
  width: 25px;
  height: 25px;
  background: #123456;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 25%;
`;

const Editor = styled.div`
  position: absolute;
  top: 0px;
  left: calc(100% + 10px);
  width: 250px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid gray;
  text-align: center;
  color: white;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  border-radius: 0.5rem;

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: white;
    outline: none;
    border-radius: 0.25rem;
    margin-bottom: 10px;

    &::-webkit-slider-thumb {
      appearance: none;
      ${commonInputCss};
    }

    &::-moz-range-thumb {
      ${commonInputCss};
    }
  }
`;

const CodeBlock = styled.div`
  background: white;
  color: black;
  padding: 10px;
  border-radius: 0.25rem;
  text-align: left;
  font-size: 0.7rem;
`;

export { Container, Editor, CodeBlock };
