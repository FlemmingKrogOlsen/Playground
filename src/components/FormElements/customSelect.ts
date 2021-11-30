import styled from "styled-components";

//  Select
const CustomSelect = styled.div`
  position: relative;
  &:before {
    content: "▼";
    position: absolute;
    pointer-events: none;
    right: 10px;
    top: 3px;
    color: black;
    font-size: 16px;
    font-weight: 800;
  }

  select {
    appearance: none;
  }
`;

export default CustomSelect;
