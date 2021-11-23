import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { getComponentPages } from "./componentLibraryData";

import type { LinkProps } from "react-router-dom";
import styled from "styled-components";
import { Main } from "../styled";


const QueryNavLink = ({ to, ...props }: LinkProps) => {
  let location = useLocation();
  return <StyledNavLink to={to + location.search} {...props} />;
};

const StyledNavLink = styled(NavLink)`
  display: block;
  margin: 1rem 0;
  text-decoration: none;
  color: ${({ theme }) => theme.NAVMENU.INACTIVE};
  &.active {
    color: ${({ theme }) => theme.NAVMENU.ACTIVE};
  }
`;

export const PageBanner = styled.header`
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  padding: 1rem;
  width: 100%;
  color: white;
  margin-bottom: 10px;
`;

const Container = styled.div`
  position: relative;

  nav {
    position: absolute;
    top: 0;
    right: calc(100% + 10px);
    background: ${({ theme }) => theme.COLOR.PRIMARY};
    padding: 5px;
    border-radius: 0.5rem;
    a {
      padding: 0 0.5rem;
    }
  }

  input[type="text"] {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    border: none;
    outline: none;
    width: 250px;
    background-color: #f3f3f3;
    color: gray;

    &:focus-visible {
      font-weight: bold;
    }
  }
`;

export const ComponentsMainPage = () => (
  <PageBanner>Select a component from library</PageBanner>
);

const Components = () => {
  let pages = getComponentPages();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container>
      <nav>
          <input
            type="text"
            value={searchParams.get("filter") || ""}
            placeholder="Search"
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
        {pages
          .filter((page) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = page.name.toLowerCase();
            return name.includes(filter.toLowerCase());
          })
          .map((page) => (
            <QueryNavLink to={`/components/${page.id}`} key={page.id}>
              {page.name}
            </QueryNavLink>
          ))}
      </nav>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Components;
