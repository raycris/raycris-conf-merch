import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';

import { AppContext } from '@contexts/AppContext';

import { PayPalButton } from 'react-paypal-button-v2';

import { handleSumTotal } from '@utils';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate()

  const paypalOptions = {
    clientId:
      'ARtSlpTKcUL4xQ-rIgfsN_QrBrb8TLo98iu-uHNw-mNwGZ_poPKAewZ8Ky0HjpTdx0qKKG3Y8A4VjzBQ',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) =>{
    console.log(data)
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        products: cart, 
        payment: data
      }
      addNewOrder(newOrder)
      navigate('/checkout/success')
    } 
  }


  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          Pago con Paypal
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export { Payment };
