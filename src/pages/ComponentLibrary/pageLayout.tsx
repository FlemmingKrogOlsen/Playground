import { createElement } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getComponentPage } from "pages/ComponentLibrary/componentLibraryData";

const PageBanner = styled.header`
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  padding: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.COLOR.TEXT};
  margin-bottom: 10px;
`;

export const PageLayout = () => {
  let params = useParams();
  let page = getComponentPage(parseInt(params.componentId || "0", 10));

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

export const ComponentsMainPage = () => (
  <PageBanner>Select a component from library</PageBanner>
);