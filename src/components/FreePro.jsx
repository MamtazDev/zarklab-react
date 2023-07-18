import React from "react";
import free from "../assets/image/free.png";
import pro from "../assets/image/pro.png";
import greenPoint from "../assets/image/green-point.png";
import redPoint from "../assets/image/red-point.png";
import rightArrow from "../assets/image/right-arrow.png";

const FreePro = () => {
  return (
    <section className="free_pro">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row g-0 gx-lg-5 free_pro_inner">
          <div className="col-12 col-lg-6">
            <div className="free mb-5 pb-1">
              <div>
                <h2 style={{ marginBottom: "16px" }}>Free</h2>
                <p className="mb-4 mb-lg-0">
                  A starter’s pack to experiencing <br /> ZarkLab
                </p>
              </div>
              <img className="img-fluid" src={free} alt="free" />
            </div>
            <div className="options pt-0 pt-lg-5">
              <div className="d-flex align-items-center gap-3">
                <img src={greenPoint} alt="icon" />
                <h6>100+ advanced blockchain analytics </h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={greenPoint} alt="icon" />
                <h6>
                  Real-time notification and alerts for price movements or
                  manipulations{" "}
                </h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={greenPoint} alt="icon" />
                <h6>World’s first Crypto AI Chat for complex queries </h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={greenPoint} alt="icon" />
                <h6>
                  Manage your Crypto assets with detailed Wallet analytics,
                  including persona{" "}
                </h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={greenPoint} alt="icon" />
                <h6>Access the latest market trends across the Blockchain </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="pro row g-0 mb-3">
              <div className="col-12 col-lg-6">
                <h2 style={{ marginBottom: "5px" }}>ZarkLab PRO</h2>
                <h1 style={{ marginBottom: "9px" }}>$20.99</h1>
                <p className="mb-4 mb-lg-0">
                  A complete experience with more comprehensive Crypto insights
                  and AI-driven Recommendations
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <img className="img-fluid" src={pro} alt="" />
              </div>
            </div>

            <div className="options">
              <div className="d-flex align-items-center gap-3">
                <img src={redPoint} alt="icon" />
                <h6>300+ Crypto insights & Signals </h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={redPoint} alt="icon" />
                <h6>Personalised AI-driven Recommendations </h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={redPoint} alt="icon" />
                <h6>Unlimited search queries on Crypto Chat </h6>
              </div>

              <div className="d-flex align-items-center gap-3">
                <img src={redPoint} alt="icon" />
                <h6>Portfolio Cost Optimisation Calculator </h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={redPoint} alt="icon" />
                <h6>Multiple Wallet Addresses for consolidated view </h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={redPoint} alt="icon" />
                <h6>Quarterly Crypto Trend Reports</h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={redPoint} alt="icon" />
                <h6>Early access to new analytics tools and insights</h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={redPoint} alt="icon" />
                <h6>Advanced Filters and Customised Search</h6>
              </div>
            </div>
            <a href=" ./payment.html">
              <button className="mb-5 mb-lg-0 d-flex gap-5 align-items-center">
                Turn Pro Now <img src={rightArrow} alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreePro;
