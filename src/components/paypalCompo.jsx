// YourComponent.js
import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const YourComponent = () => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "10.00",
            currency_code: "USD",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    // Handle the payment approval here
    actions.order.capture().then(function (details) {
      // Successful payment, you can do something here
      console.log("Payment completed: ", details);
      
    });
  };

  const onError = (err) => {
    // Handle error here
    console.error("PayPal Error: ", err);
  };

  return (
    <div>
      <h1>React PayPal Integration</h1>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </div>
  );
};

export default YourComponent;
