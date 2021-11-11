import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/Home'
import About from '../pages/About';
import Invoices, { InvoicesMainPage } from '../pages/Invoices/invoices';
import Invoice from '../pages/Invoices/invoice';

import Error from './error'
const error404 = "Error 404 : Page not found"

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<InvoicesMainPage />} />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<Error title={error404} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing