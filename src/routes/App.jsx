import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '@containers/Home';
import { Payment } from '@containers/Payment';
import { Success } from '@containers/Success';
import { NotFound } from '@containers/NotFound';
import { Checkout } from '@containers/Checkout';
import { Information } from '@containers/Information';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/information" element={<Information />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/checkout/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
