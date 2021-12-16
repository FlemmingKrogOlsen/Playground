import { Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getCssPages } from "./cssLibraryData";
import type { LinkProps } from "react-router-dom";
import { Main } from "layout/nested.styled";
import { StyledNavLink, Container, Input } from "layout/nested.styled";

const QueryNavLink = ({ to, ...props }: LinkProps) => {
  let location = useLocation();
  return <StyledNavLink to={to + location.search} {...props} />;
};

const CSS = () => {
  let pages = getCssPages();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container>
      <nav>
        <Input
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
            <QueryNavLink to={`/css/${page.id}`} key={page.id}>
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

export default CSS;
