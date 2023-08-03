import {CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from "./createPayment";
import CustomCard from "./CustomCard";
import { useState } from "react";
import { redirect } from 'react-router-dom';

// padding: 25px 20px;
//     border-radius: 8px;
//     border: 1px solid #444;
//     background: #121212;
//     color: #fff;

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      borderStyle:"solid",
      borderWidth:'1px',
      background:'#121212',
      color:"#fff",
      border: '1px solid red',
      fontSize:'20px',
      width:'100%'
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState();





  const handlePayment = async () => {
  
    // Get the PaymentIntent client secret from your server or set it on the client-side
    // const clientSecret = 'YOUR_CLIENT_SECRET';
    if (!stripe) {
      // Stripe.js has not loaded yet, so do nothing.
      return;
    }
    const cardElement = elements.getElement(CardNumberElement);

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

    console.log('paymentdone ',paymentIntent);
    alert("Your payment done successfully")
  
    redirect('/')

   

    if (error) {
      setError(error?.message)
      console.error(error);
      // Handle error: Show error to the user
    } else {
      // Payment succeeded, handle success
    }
  };

  return (
    <div>


                 {
                error && (
                  <div className="toast-body text-white fs-5">
                    {error}
                  </div>
                )
               }
              <div className="form_data" id="card-number">
                <label className="form-label">Card Number</label>
                <CardNumberElement options={CARD_OPTIONS} />
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
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Last Name*"
                  />
                </div>

                <input
                  className="form-control"
                  type="text"
                  placeholder="Address (P.O. box, company name, c/o)*"
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address line 2 (Apartment, suite, unit)"
                />

                <div className="d-flex bill_input">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Postal Code*"
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Country*"
                  />
                </div>
              </div>

              <div className="submit_btn">
                <button type="button" disabled={!stripe} onClick={handlePayment}>Pay Now</button>
              </div>
      
      {/* <button disabled={!stripe} onClick={handlePayment}>Pay with Stripe</button> */}
    </div>
  );
};

export default PaymentForm;
