import React from 'react';

const PaymentBanner = () => {
    return (
        <div>
              <h2>Turning Pro with ZarkLab</h2>
        <div className="plan_details">
          <div className="plan_header d-flex justify-content-between align-items-center">
            <div>
              <h3>Plan Details</h3>
              <h5>What you’re getting to</h5>
            </div>
            <div>
              <h4>$20.99 </h4>
              <p className="text-end">/month</p>
            </div>
          </div>
          <div className="options text-white">
            <div className="d-flex align-items-center gap-3 mb-4">
              <img src="./assets/image/plan_details.png" alt="" />
              <h6>300+ Crypto insights &amp; Signals </h6>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4">
              <img src="./assets/image/plan_details.png" alt="" />
              <h6>Personalised AI-driven Recommendations </h6>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4">
              <img src="./assets/image/plan_details.png" alt="" />
              <h6>Unlimited search queries on Crypto Chat </h6>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4">
              <img src="./assets/image/plan_details.png" alt="" />
              <h6>Portfolio Cost Optimisation Calculator </h6>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4">
              <img src="./assets/image/plan_details.png" alt="" />
              <h6>Multiple Wallet Addresses for consolidated view </h6>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4">
              <img src="./assets/image/plan_details.png" alt="" />
              <h6>Quarterly Crypto Trend Reports</h6>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4">
              <img src="./assets/image/plan_details.png" alt="" />
              <h6>Early access to new analytics tools and insights</h6>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4">
              <img src="./assets/image/plan_details.png" alt="" />
              <h6>Advanced Filters and Customised Search</h6>
            </div>
          </div>
        </div>
        </div>
    );
};

export default PaymentBanner;