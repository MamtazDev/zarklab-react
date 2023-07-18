import React from "react";

const PaymentFrequency = () => {
  return (
    <div className="payment">
      <h1>Payment Frequency</h1>
      <h3>Decide when you get billed</h3>
      <button className="active">Pay monthly</button>
      <button className="off_btn">Pay yearly | Get 20% off</button>

      <div className="amount">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Total Amount</h6>
          <p className="d-none d-lg-block">$16.67/ month</p>
        </div>
        <div className="d-flex justify-content-between align-items-center pay_box">
          <p>Payment due Jul 21, 2023</p>
          <h3>$200</h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentFrequency;
