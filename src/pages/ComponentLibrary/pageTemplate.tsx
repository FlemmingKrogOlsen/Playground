import { createElement } from "react";
import { useParams  } from "react-router-dom";
import { getComponentPage  } from "./componentLibraryData";
import {PageBanner} from './index'

const PageTemplate = () => {
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
}

export default PageTemplate;



