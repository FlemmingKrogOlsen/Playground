import { Outlet } from "react-router-dom";
import { Header, MenuLink, BrandLink, Footer } from "./styles";
import Contact from './contact'

const Layout = () => {
  return (
    <>
      <Header>
        <BrandLink to="/">Invoices</BrandLink>
        <nav>
          <MenuLink to="/invoices">Invoices</MenuLink>
          <MenuLink to="/about">About</MenuLink>
        </nav>
      </Header>
      <Outlet />
      <Footer>
        <Contact />
      </Footer>
    </>
  );
}

export default Layout