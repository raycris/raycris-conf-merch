import React from 'react';

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
          <button type="button">Eliminar</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total: $4</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </div>
  );
};

export { Checkout };
