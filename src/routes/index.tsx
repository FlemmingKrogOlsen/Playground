import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "layout";
import Error from "./error";

import Home from "pages/Home";
import About from "pages/About";
import Components, { ComponentsMainPage } from "pages/ComponentLibrary";
import PageTemplate from "pages/ComponentLibrary/pageTemplate";

const Routing = () => (
  <BrowserRouter basename="/Playground">
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/components" element={<Components />}>
          <Route index element={<ComponentsMainPage />} />
          <Route path=":componentId" element={<PageTemplate />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routing;
