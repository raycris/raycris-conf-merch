import React from 'react';

import '@styles/Layout.css';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
