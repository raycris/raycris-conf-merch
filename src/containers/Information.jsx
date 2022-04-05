import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AppContext } from '@contexts/AppContext';

import '@styles/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const form = useRef(null);
  const navigate = useNavigate()

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      cp: formData.get('cp'),
      name: formData.get('name'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      email: formData.get('email'),
      state: formData.get('state'),
      phone: formData.get('phone'),
      country: formData.get('country'),
      address: formData.get('address'),
    };
    addToBuyer(buyer);
    navigate('/checkout/payment')
  };


  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Cioudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Information };
