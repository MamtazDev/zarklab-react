import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./createPayment";
import CustomCard from "./CustomCard";
import { useState } from "react";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [cardNumber, setCardNumber] = useState();
  const [cardExpMonth, setCardExpMonth] = useState();
  const [cardExpYear, setCardExpYear] = useState();
  const [cardCvc, setCardCvc] = useState();

  const handlePayment = async () => {
    // Get the PaymentIntent client secret from your server or set it on the client-side
    // const clientSecret = 'YOUR_CLIENT_SECRET';
    if (!stripe) {
      // Stripe.js has not loaded yet, so do nothing.
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const clientSecret = await createPaymentIntent(5000, "usd");

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          type: "card",
          card: cardElement, // Replace with the actual CardElement
          billing_details: {
            name: "John Doe",
            address: {
              line1: "123 Main St",
              city: "New York",
              state: "NY",
              postal_code: "10001",
              country: "US",
            },
          },
        },
      }
    );

    if (error) {
      console.error(error);
      // Handle error: Show error to the user
    } else {
      // Payment succeeded, handle success
    }
  };

  return (
    <div>
      {/* Your other form fields (e.g., name, address) */}
      {/* Payment Sheet trigger */}
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button onClick={handlePayment}>Pay with Stripe</button>
    </div>
  );
};

export default PaymentForm;
