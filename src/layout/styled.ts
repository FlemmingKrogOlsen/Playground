import { NavLink, Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
    top: 16px;
  }

  &::after {
    bottom: 16px;
  }
`;

export const Header = styled.header`
  ${bars};
  position: relative;
  background-color: ${({ theme }) => theme.COLOR.PRIMARY};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BrandLink = styled(Link)`
  font-size: 3rem;
  color: ${({ theme }) => theme.COLOR.TEXT};
  font-weight: 700;
`;

export const MenuLink = styled(NavLink)`
  font-size: 1.25rem;
  line-height: 2.25rem;
  color: ${({ theme }) => theme.NAVMENU.INACTIVE};
  &.active {
    color: ${({ theme }) => theme.NAVMENU.ACTIVE};
  }
  &:not(:first-child) {
    margin-left: 1.5rem;
  }
`;

export const MainContent = styled.div<{ maxWidth: number }>`
  max-width: ${({ maxWidth }) => maxWidth}px;
  margin: auto;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.COLOR.PRIMARY};
  padding: 0.5rem 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${({ theme }) => theme.COLOR.TEXT};
  }
`;
