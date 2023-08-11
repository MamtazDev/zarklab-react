import React from "react";
import PaymentBanner from "../components/PaymentBanner";
import PaymentFrequency from "../components/PaymentFrequency";
import PaymentDetails from "../components/PaymentDetails";
import PaymentLogin from "../components/PaymentLogin";

const Payment = () => {
  return (
    <section className="turning_pro">
      <div className="container">
        <PaymentBanner />
        <PaymentFrequency />
        {/* <PaymentLogin /> */}
        <PaymentDetails />
      </div>
    </section>
  );
};

export default Payment;
