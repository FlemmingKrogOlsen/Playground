import styled from "styled-components";
import { CommonInput } from './'
const Buttons = styled.div`
  margin-top: 20px;
  input[type="submit"],
  input[type="reset"] {
    ${CommonInput};
    width: 150px;
  }
  input[type="reset"] {
    margin-left: auto;
  }
`;

export default Buttons;
