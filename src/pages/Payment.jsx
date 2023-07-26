import React from "react";
import PaymentBanner from "../components/PaymentBanner";
import PaymentFrequency from "../components/PaymentFrequency";
import PaymentDetails from "../components/PaymentDetails";

const Payment = () => {
  return (
    <section className="turning_pro">
      <div className="container">
        <PaymentBanner />
        <PaymentFrequency />
        <PaymentDetails />
      </div>
    </section>
  );
};

export default Payment;
