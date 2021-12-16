import { createElement } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getCssPage } from "pages/CssLibrary/cssLibraryData";

const PageBanner = styled.header`
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  padding: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.COLOR.TEXT};
  margin-bottom: 10px;
`;

export const CssPageLayout = () => {
  let params = useParams();
  let page = getCssPage(parseInt(params.componentId || "0", 10));

  return (
    <>
      {!page ? (
        <div>page Not found</div>
      ) : (
        <>
          <PageBanner>{page.name}</PageBanner>
          {createElement(page.component)}
        </>
      )}
    </>
  );
};

export const CssMainPage = () => (
  <PageBanner>Select CSS from library</PageBanner>
);