import { createElement } from "react";
import { useParams } from "react-router-dom";

import { getComponentPage } from "pages/ComponentLibrary/componentLibraryData";
import { PageBanner } from "layout/nested.pages";

export const ComponentPageLayout = () => {
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
