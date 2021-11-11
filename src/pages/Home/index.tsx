import { NavLink, Outlet } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  border-bottom: solid 1px;
  padding: 1rem;
  background-color: ${({theme}) => theme.main};
  header {
    color: white;
    font-size: 3rem;
  }
  nav {
    position: absolute;
    top: 1rem;
    right: 0px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({theme}) => theme.inactiveColor};
  text-decoration: none;
  font-size: 1.5rem;
  margin-right: 1rem;
  &.active {
    color: ${({theme}) => theme.activeColor};
  }
`;

const Home = () => {
  return (
    <div>
      <Container>
        <header>Invoices</header>
        <nav>
          <StyledNavLink to="/invoices">Invoices</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </nav>
      </Container>
      <Outlet />
    </div>
  );
}

export default Home