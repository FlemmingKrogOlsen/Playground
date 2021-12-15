import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: relative;

  nav {
    position: absolute;
    top: 0;
    right: calc(100% + 10px);
    background: ${({ theme }) => theme.COLOR.PRIMARY};
    padding: 5px;
    border-radius: 0.5rem;
    a {
      padding: 0 0.5rem;
    }
  }
`;

export const Input = styled.input`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  width: 250px;
  background-color: #f3f3f3;
  color: gray;

  &:focus-visible {
    font-weight: bold;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  margin: 1rem 0;
  color: ${({ theme }) => theme.NAVMENU.INACTIVE};
  &.active {
    color: ${({ theme }) => theme.NAVMENU.ACTIVE};
  }
`;


