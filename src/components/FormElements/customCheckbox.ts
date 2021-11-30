
import styled from "styled-components";

import {colors} from "./colors"

const CustomCheckbox = styled.div`
  > div {
    color: ${colors.TEXT};
  }

  label {
    display: block;
    position: relative;

    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover input ~ span {
      background-color: ${colors.FOCUS};
    }
    span:after {
      left: 8px;
      top: 4px;
      width: 8px;
      height: 12px;
      border: solid ${colors.BORDER};
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    div {
      padding-left: 40px;
      font-size: 14px !important;
    }
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ span {
      color: ${colors.BORDER};
    }
    &:checked ~ span:after {
      display: block;
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background-color: ${colors.BACKGROUND};
    border: 2px solid ${colors.BORDER};
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }
`;

export default CustomCheckbox