import styled, { css } from "styled-components";
import {colors} from "./colors"

export const CommonInput = css`
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

const Form = styled.form`
  /* Form */
  width: 100%;
  border: 5px solid ${colors.BORDER};
  border-radius: 0.5rem;
  box-shadow: ${colors.SHADOW};
  padding: 20px;
  padding-bottom: 10px;
  background-color: ${colors.BACKGROUND};
  color: ${colors.TEXT};


  > div,
  fieldset > div {
    position: relative;
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin-bottom: 10px;
  }

  /* Label */
  label {
    text-align: left;
    font-size: 16px;
    padding: 5px 0px;
  }

  /* Inputs */
  input[type="text"] {
    ${CommonInput};
  }

  input[type="email"] {
    ${CommonInput};
  }

  input[type="number"] {
    ${CommonInput};
  }

  input[type="date"] {
    ${CommonInput};
  }

  input[type="password"] {
    ${CommonInput};
  }

  select {
    ${CommonInput};
  }

  textarea {
    ${CommonInput};
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
  }

  /* Error */
  p {
    position: absolute;
    color: red;
    font-size: 10px;
    top: -5px;
    left: 0px;
  }

  /* FieldSet */
  fieldset {
    width: 100%;
    background-color: #d9d9d9;
    color: ${colors.TEXT};
    padding: 10px;
    border-radius: 0.5rem;
    position: relative;
    border: 2px solid ${colors.BORDER};
    margin-bottom: 10px;
    legend {
      border: 2px solid ${colors.BORDER};
      padding: 5px 10px;
      background-color: ${colors.BACKGROUND};
      border-radius: 0.55rem;
      color: ${colors.TEXT};
      font-size: 12px;

      @media screen and (min-width: 600px) {
        font-size: 16px;
        top: -19px;
      }
    }
  }
`;

export default Form;
