import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation
} from "react-router-dom";
import { getInvoices } from "../../data";

import type { LinkProps } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Main } from '../styled'

const QueryNavLink = ({ to, ...props }: LinkProps) => {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props}
    style={({ isActive }) => ({
      display: "block",
      margin: "1rem 0",
      color: isActive ? theme.activeColor : theme.inactiveColor
    })} />;
}

const InvoicesBanner = styled.header`
  background: ${({ theme }) => theme.main};
  padding:  1rem;
  width: 100%;
  color: white;
`;

const Container = styled.div`
  display: flex;
  nav {
    border-right: 1px solid;
    padding: 1rem;
    height: calc(100vh - 88px);
  }
  input {
    padding: 0.5rem;
    border-radius: 7px;
    border: 1px solid black;
    outline: none;
    font-size: 1.75rem;
    &:focus-visible {
      background-color: #f3f3f3;
    }
  }
`;

export const InvoicesMainPage = () => {
  return (
    <Main>
      <InvoicesBanner>Select an invoice</InvoicesBanner>
    </Main>
  )
}

const Invoices = () => {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container>
      <nav>
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter(invoice => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map(invoice => (
            <QueryNavLink
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </Container>
  );
}

export default Invoices;
