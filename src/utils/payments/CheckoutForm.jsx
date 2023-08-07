import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./createPayment";
import CustomCard from "./CustomCard";
import { useContext, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import warning from "../../assets/image/warning.png";

// padding: 25px 20px;
//     border-radius: 8px;
//     border: 1px solid #444;
//     background: #121212;
//     color: #fff;

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      borderStyle: "solid",
      borderWidth: "1px",
      background: "#121212",
      color: "#fff",
      border: "1px solid red",
      fontSize: "20px",
      width: "100%",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};
const PaymentForm = () => {
  const { duration, setDuration } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    // Get the PaymentIntent client secret from your server or set it on the client-side
    // const clientSecret = 'YOUR_CLIENT_SECRET';
    if (!stripe) {
      // Stripe.js has not loaded yet, so do nothing.
      return;
    }

    setIsProcessing(true);
    const cardElement = elements.getElement(CardNumberElement);

    const clientSecret = await createPaymentIntent(
      duration === "monthly" ? 2000 : 20000,
      "usd"
    );

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          type: "card",
          card: cardElement, // Replace with the actual CardElement
          billing_details: {
            name: firstName + " " + lastName,
            address: {
              line1: addressLine,
              city: address,
              postal_code: postCode,
              country: country,
            },
          },
        },
      }
    );

    if (error) {
      setError(error?.message);
      console.error(error);
      // Handle error: Show error to the user
    } else if (paymentIntent.status === "succeeded") {
      setIsProcessing(false);
      // Payment succeeded, handle success
      console.log("paymentdone ", paymentIntent);
      alert("Your payment done successfully");
      setError("");
      navigate("/");
    }
  };

  return (
    <div>
      <div className="form_data" id="card-number">
        <label className="form-label">Card Number</label>
        <CardNumberElement options={CARD_OPTIONS} />
        {error && (
          <div className="toast-body warning_sms mt-2 d-flex align-items-center gap-2">
            <img src={warning} alt="" />
            {error}
          </div>
        )}
      </div>

      <div className="d-lg-flex justify-content-between">
        <div className="form_data">
          <label className="form-label">Expiration Date (MM/ YY)</label>
          <CardExpiryElement options={CARD_OPTIONS} />
        </div>

        <div className="form_data">
          <label className="form-label">CVV/ CVC</label>
          <CardCvcElement options={CARD_OPTIONS} />
        </div>
      </div>

      <div className="billing_information">
        <h3>Billing information</h3>
        <p>Please confirm your billing details to proceed. </p>

        {/* <div className="profile d-flex gap-4">
                  <img src={profile} alt="" />
                  <div>
                    <h4>{user ? user : "Penzie"}</h4>
                    <p>Personal Account</p>
                  </div>
                </div> */}

        <div className="d-flex bill_input">
          <input
            className="form-control"
            type="text"
            placeholder="First Name*"
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="off"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Last Name*"
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="off"
          />
        </div>

        <input
          className="form-control"
          type="text"
          placeholder="Address (P.O. box, company name, c/o)*"
          onChange={(e) => setAddress(e.target.value)}
          autoComplete="off"
        />
        <input
          className="form-control"
          type="text"
          placeholder="Address line 2 (Apartment, suite, unit)"
          onChange={(e) => setAddressLine(e.target.value)}
          autoComplete="off"
        />

        <div className="d-flex bill_input">
          <input
            className="form-control"
            type="number"
            placeholder="Postal Code*"
            onChange={(e) => setPostCode(e.target.value)}
            autoComplete="off"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Country*"
            onChange={(e) => setCountry(e.target.value)}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="submit_btn">
        <button
          type="button"
          disabled={!stripe || isProcessing}
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>

      {/* <button disabled={!stripe} onClick={handlePayment}>Pay with Stripe</button> */}
    </div>
  );
};

export default PaymentForm;
