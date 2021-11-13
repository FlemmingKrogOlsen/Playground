import { NavLink, Link } from "react-router-dom";
import styled, { css } from "styled-components";

const barHeight = 16;

const bars = css`
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0px;
    width: 100%;
    height: 1px;
    background-color: lightgray;
    box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.25);
  }

  &::before {
    top: ${barHeight}px;
  }

  &::after {
    bottom: ${barHeight}px;
  }
`;

export const Header = styled.header`
  ${bars};
  position: relative;
  background-color: ${({ theme }) => theme.main};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  a {
    text-decoration: none;
  }
`;

export const BrandLink = styled(Link)`
  font-size: 3rem;
  color: white;
`;

export const MenuLink = styled(NavLink)`
  font-size: 1.25rem;
  line-height: 2.25rem;
  color: ${({ theme }) => theme.inactiveColor};
  &.active {
    color: ${({ theme }) => theme.activeColor};
  }
  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const Navigation = styled.nav``;
