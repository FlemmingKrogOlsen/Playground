import { Outlet, Link } from "react-router-dom";
import {
  Header,
  BrandLink,
  MenuLink,
  MainContent,
  Footer,
} from "layout/styled";
import ContactInfo from "layout/ContactInfo";

const Layout = () => (
  <>
    <Header>
      <BrandLink to="/">PLAYGROUND</BrandLink>
      <nav>
        <MenuLink to="/components">Collection of Component</MenuLink>
        <MenuLink to="/css">CSS Explained</MenuLink>
        <MenuLink to="/about">About</MenuLink>
      </nav>
    </Header>
    <MainContent maxWidth={700}>
      <Outlet />
    </MainContent>
    <Footer>
      <Link to="/">flemmingkrogolsen.github.io/Playground/</Link>
      <ContactInfo />
    </Footer>
  </>
);

export default Layout;
