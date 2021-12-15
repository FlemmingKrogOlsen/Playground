import { Outlet, Link } from "react-router-dom";
import { Header, MenuLink, BrandLink, Footer, MainContent } from "./styles";
import ContactInfo from "./ContactInfo";

const Layout = () => {
  return (
    <>
      <Header>
        <BrandLink to="/">PLAYGROUND</BrandLink>
        <nav>
          <MenuLink to="/components">Collection of Component</MenuLink>
          <MenuLink to="/about">About</MenuLink>
        </nav>
      </Header>
      <MainContent maxWidth={700}>
        <Outlet />
      </MainContent>
      <Footer>
        <div style={{ lineHeight: "2rem" }}>
          <Link to="/">flemmingkrogolsen.github.io/Playground/</Link>
        </div>
        <ContactInfo />
      </Footer>
    </>
  );
};

export default Layout;
