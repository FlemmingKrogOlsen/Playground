import { createElement } from "react";
import { useParams } from "react-router-dom";

import { getCssPage } from "pages/CssLibrary/cssLibraryData";
import { PageBanner } from "layout/nested.pages";

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
