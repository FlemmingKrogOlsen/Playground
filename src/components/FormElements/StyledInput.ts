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
  width: 100%;

  &:focus {
    background-color: ${colors.FOCUS};
  }

  &::placeholder {
    color: ${colors.PLACEHOLDER};
  }
`;

const Input = styled.input`
  ${commonInputCSS};
  max-height: 30px;
`;

const Label = styled.label`
  font-size: 1.5rem;

  span {
    font-size: 10px;
  }
`;

const LabelText = styled.div`
  font-size: 1.5rem;
`;

const Select = styled.select`
  ${commonInputCSS};
  padding: 0px 3px;
  height: 30px;
`;

const TextArea = styled.textarea`
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

export { Input, Label, LabelText, TextArea, Select };
