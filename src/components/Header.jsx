import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '@styles/Header.css';

import { AppContext } from '@contexts/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">RaycrisConf Merch</Link>
      </h1>

      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"></i>
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export { Header };
