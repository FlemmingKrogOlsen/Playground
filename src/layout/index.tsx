import { Outlet, Link } from "react-router-dom";
import { Header, MenuLink, BrandLink, Footer, MainContent } from "./styles";
import Contact from './contact'

const Layout = () => {
  return (
    <>
      <Header>
        <BrandLink to="/">PLAYGROUND</BrandLink>
        <nav>
          <MenuLink to="/components">My Component Library</MenuLink>
          <MenuLink to="/about">About</MenuLink>
        </nav>
      </Header>
      <MainContent maxWidth={800}>
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