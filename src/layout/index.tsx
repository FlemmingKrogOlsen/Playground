import { Outlet } from "react-router-dom";
import { Header, MenuLink, BrandLink, Navigation } from "./styles";

const Layout = () => {
  return (
    <>
      <Header>
        <BrandLink to="/">Invoices</BrandLink>
        <Navigation>
          <MenuLink to="/invoices">Invoices</MenuLink>
          <MenuLink to="/about">About</MenuLink>
        </Navigation>
      </Header>
      <Outlet />
    </>
  );
}

export default Layout