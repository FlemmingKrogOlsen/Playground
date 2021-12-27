import styled from "styled-components";
import { colors } from "./colors";

const Buttons = styled.div`
  margin-top: 20px;
  input[type="submit"],
  input[type="reset"] {
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
    width: 150px;
  }
  input[type="reset"] {
    margin-left: auto;
  }
`;

export default Buttons;
