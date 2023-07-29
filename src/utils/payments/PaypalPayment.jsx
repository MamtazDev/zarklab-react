import { PayPalButtons } from "@paypal/react-paypal-js";

export const PayPalButton = () => {
  return (
    <PayPalButtons
      style={{ layout: "horizontal" }}
      createOrder={(data, actions) => {
        // Handle creating the PayPal order and return the order ID
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "10.00", // Replace with the actual payment amount
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        // Handle when the user approves the payment (e.g., show success message)
      }}
      onError={(error) => {
        // Handle PayPal errors (e.g., show error message)
      }}
    />
  );
};
