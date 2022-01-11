import styled, { css } from "styled-components";
import { colors } from "./colors";

const commonGrid = css`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  position: relative;
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
`;

export const ErrorContainer = styled.section`
  p {
    color: red;
    font-size: 10px;
    display: block;
  }
`;
