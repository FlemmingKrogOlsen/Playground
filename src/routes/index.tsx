import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "layout";
import Error from "./error";

import Home from "pages/Home";
import About from "pages/About";
import Components from "pages/ComponentLibrary";
import CSS from "pages/CssLibrary";
import {ComponentPageLayout, ComponentsMainPage} from "pages/ComponentLibrary/componentPageLayout";
import {CssPageLayout, CssMainPage} from "pages/CssLibrary/cssPageLayout";

const Routing = () => (
  <BrowserRouter basename="/Playground">
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/components" element={<Components />}>
          <Route index element={<ComponentsMainPage />} />
          <Route path=":componentId" element={<ComponentPageLayout />} />
        </Route>

        <Route path="/css" element={<CSS />}>
          <Route index element={<CssMainPage />} />
          <Route path=":componentId" element={<CssPageLayout />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routing;
