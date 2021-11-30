import styled, { css } from "styled-components";

const colors = {
  COMPONENT_BACKGROUND: "hsl(0, 0%, 100%)",
  GRAY95: "hsl(0, 0%, 95%)",
  BLACK: "hsl(0, 0%, 0%)",
  PRIMARY: "#123456",
};

const shadow = "rgba(0, 0, 0, 0.3) 0px 15px 30px 0px, rgba(0, 0, 0, 0.3) 0px 5px 10px 0px"
const shadowActive = "rgba(0, 0, 0, 0.3) 0px 5px 10px 0px, rgba(0, 0, 0, 0.3) 0px 5px 10px 0px"


const commonStyle = css`
  svg {
    height: 2rem;
    vertical-align:middle;
    margin-right: 10px;
  }

  display: inline-block;
  position: relative;
  border: 2px solid #123456;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  color: ${colors.BLACK};
  background: ${colors.COMPONENT_BACKGROUND};
  padding: 5px 10px 5px 7px;
  margin: 5px;
  box-shadow: ${shadow};

  &:hover {
    background: ${colors.GRAY95};
  }

  &:active {
    border: 2px solid ${colors.PRIMARY};
    color: ${colors.PRIMARY};
    box-shadow: ${shadowActive};
    top: 2px;
  }
`;

const StyledBtn = styled.button`
  ${commonStyle};
  font-family: inherit;
  cursor: pointer;
`;

const StyledLink = styled.a`
  ${commonStyle};
  display: inline-block;
  text-decoration: none;
`;

export { StyledBtn, StyledLink };
