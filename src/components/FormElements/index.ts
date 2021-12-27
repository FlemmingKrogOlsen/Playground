import styled, { css } from "styled-components";
import { colors } from "./colors";

const commonInputCSS = css`
  font-size: 14px;
  padding: 5px;
  border: 2px solid ${colors.BORDER};
  border-radius: 0.5rem;
  outline: none;
  background-color: ${colors.BACKGROUND};
  color: ${colors.TEXT};

  &:focus {
    background-color: ${colors.FOCUS};
  }
  &::placeholder {
    color: ${colors.PLACEHOLDER};
  }
`;

export const Input = styled.input`
  ${commonInputCSS};
`;

export const Select = styled.select`
  ${commonInputCSS};
`;

export const Label = styled.label`
  font-size: 1.5rem;
`;

export const LabelText = styled.div`
  font-size: 1.5rem;
`;

export const TextArea = styled.textarea`
${commonInputCSS};
  height: 200px;
  resize: none;

  &::placeholder {
    color: ${colors.PLACEHOLDER};
  }
  &:focus {
    background-color: ${colors.FOCUS};
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${colors.BORDER};
    border: 2px solid white;
  }
`; 

const commonGrid = css`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 100%;
  border: 5px solid ${colors.BORDER};
  border-radius: 0.5rem;
  padding: 20px;
  background-color: ${colors.BACKGROUND};
  color: ${colors.TEXT};
  box-shadow: ${colors.SHADOW};
  > div {
    ${commonGrid};
  }

  fieldset {
    width: 100%;
    background-color: #d9d9d9;
    color: ${colors.TEXT};
    padding: 10px;
    border-radius: 0.5rem;
    position: relative;
    border: 2px solid ${colors.BORDER};
    margin-bottom: 10px;
    > div {
      ${commonGrid};
    }
    legend {
      border: 2px solid ${colors.BORDER};
      padding: 5px 10px;
      background-color: ${colors.BACKGROUND};
      border-radius: 0.55rem;
      color: ${colors.TEXT};
      font-size: 12px;
      text-align: left;

      @media screen and (min-width: 600px) {
        font-size: 16px;
        top: -19px;
      }
    }
  }

  /* Inputs */



  /* Error */
  p {
    position: absolute;
    color: red;
    font-size: 10px;
    bottom: 50%;
    transform: translateY(50%);
    right: 30px;
  }
`;

export default Form;
