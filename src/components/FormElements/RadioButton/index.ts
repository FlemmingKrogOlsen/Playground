import styled from "styled-components";
import { colors } from "../colors";

const RadioButton = styled.div`
  display: block;
  position: relative;
  padding-left: 40px;
  margin-bottom: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input ~ span {
    background-color: ${colors.FOCUS};
  }

  input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked ~ span {
      background-color: ${colors.BACKGROUND};
    }
    &:checked ~ span:after {
      display: block;
    }
    &[disabled] ~ span {
      background: lightgray;
      cursor: not-allowed;
    }
  }

  label {
    font-size: 1.4rem;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 26px;
    width: 26px;
    border: 2px solid ${colors.BORDER};
    background-color: ${colors.BACKGROUND};
    border-radius: 50%;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
    &:after {
      top: 3px;
      left: 3px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: ${colors.BORDER};
    }
  }
`;

export default RadioButton;
