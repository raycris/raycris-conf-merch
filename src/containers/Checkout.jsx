import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/Checkout.css';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>name</h4>
            <span>$</span>
          </div>
          <button type="button">
          <i className='fas fa-trash-alt'></i>
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total: $4</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export { Checkout };
