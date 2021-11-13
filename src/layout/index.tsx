import { Outlet } from "react-router-dom";
import { Header, MenuLink, BrandLink, Footer, MainContent } from "./styles";
import Contact from './contact'

const Layout = () => {
  return (
    <>
      <Header>
        <BrandLink to="/">PLAYGROUND</BrandLink>
        <nav>
          <MenuLink to="/invoices">Invoices</MenuLink>
          <MenuLink to="/about">About</MenuLink>
        </nav>
      </Header>
      <MainContent maxWidth={1000}>
        <Outlet />
      </MainContent>
      <Footer>
        <Contact />
      </Footer>
    </>
  );
}

export default Layout