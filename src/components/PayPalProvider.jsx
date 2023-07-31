import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalProvider = ({ children }) => {
  const options = {
    "client-id": "YOUR_PAYPAL_CLIENT_ID",
    currency: "USD",
  };

  return (
    <PayPalScriptProvider options={options}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PayPalProvider;