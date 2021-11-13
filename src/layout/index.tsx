import { Outlet, Link } from "react-router-dom";
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
        <div style={{lineHeight:"2rem"}}>
        <Link to="/">flemmingkrogolsen.github.io/Playground/</Link>
        
        </div>
        <Contact />
      </Footer>
    </>
  );
}

export default Layout