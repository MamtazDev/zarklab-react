import React, { useState } from "react";
import applePay from "../assets/image/apple_pay.png";
import paypal from "../assets/image/paypal.png";
import applePayModal from "../assets/image/apple_pay_modal.png";
import done from "../assets/image/done.png";
import profile from "../assets/image/profile_img.png";

const Payment = () => {
  const [showCredit, setShowCredit] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);

  const handleCredit = () => {
    setShowCredit(true);
    setShowPaypal(false);
  };
  const handlePaypal = () => {
    setShowCredit(false);
    setShowPaypal(true);
  };

  return (
    <section className="turning_pro">
      <div className="container">
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

        <div className="payment">
          <div className="container">
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

            <h4>Payment Details</h4>
            <div className="payment_option">
              <form>
                <h3 style={{ marginBottom: "18px" }}>
                  Recurring billing payment
                </h3>

                {/* <!-- new radio button start --> */}
                <div>
                  <input
                    type="radio"
                    className="radio-custom-label ipayClass"
                    id="ipay"
                    name="fav_language"
                    value="HTML"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal_ipay"
                  />
                  <label htmlFor="ipay" className="label-img ipayClass">
                    <img className="ipayClass" src={applePay} alt="" />
                  </label>
                </div>

                <div onClick={handleCredit}>
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                    data={1}
                  />
                  <label htmlFor="css" className="label-text">
                    Credit/ Debit Card
                  </label>
                  <br />
                </div>

                <div onClick={handlePaypal}>
                  <input
                    type="radio"
                    className="radio-custom-label"
                    id="javascript"
                    name="fav_language"
                    value="JavaScript"
                    data={2}
                  />
                  <label htmlFor="javascript" className="label-text">
                    Paypal
                  </label>
                </div>
                {/* <!-- new radio button end --> */}

                {/* <!-- Modal Start --> */}
                <div
                  className="modal fade"
                  id="exampleModal_ipay"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="apple_pay_modal">
                          <img
                            className="img-fluid"
                            src={applePayModal}
                            alt=""
                          />
                          <hr />
                          <div className="row">
                            <div className="col-4 text-end">
                              <span>CARD</span>
                            </div>
                            <div className="col-8">
                              <p>WELLS FARGO DEBIT (**** 1234)</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-4 text-end">
                              <span>ADDRESS</span>
                            </div>
                            <div className="col-8">
                              <p>
                                JANE APPLESEED 27 FREDBERICK BUTTE RD BROTHERS,
                                OR 97712
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-4 text-end">
                              <span>BILLING EMAIL</span>
                            </div>
                            <div className="col-8">
                              <p>J.APPLESEED@ICLOUD.COM</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-4 text-end"></div>
                            <div className="col-8">
                              <div className="d-flex justify-content-between">
                                <div>
                                  <span>SUBTOTAL</span>
                                  <p style={{ marginBottom: "19px" }}>
                                    PAY ZARKLAB
                                  </p>
                                </div>
                                <div>
                                  <span>$200</span>
                                  <p className="payable">$200</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="done text-center">
                            <img
                              className="img-fluid center"
                              src={done}
                              alt=""
                            />
                            <br />
                            <span>Done</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Modal End --> */}
              </form>
            </div>
            {showCredit && (
              <div className="credit_card">
                <form action="">
                  <div className="form_data">
                    <label className="form-label">Card Number</label>
                    <input className="form-control w-100" type="text" name="" />
                  </div>

                  <div className="d-lg-flex justify-content-between">
                    <div className="form_data">
                      <label className="form-label">
                        Expiration Date (MM/ YY)
                      </label>
                      <div className="d-flex justify-content-between align-items-center gap-2 gap-lg-4">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <p>/</p>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div className="form_data">
                      <label className="form-label">CVV/ CVC</label>
                      <input className="form-control" type="number" name="" />
                    </div>
                  </div>

                  <div className="billing_information">
                    <h3>Billing information</h3>
                    <p>Please confirm your billing details to proceed. </p>

                    <div className="profile d-flex gap-4">
                      <img src={profile} alt="" />
                      <div>
                        <h4>Penzie</h4>
                        <p>Personal Account</p>
                      </div>
                    </div>

                    <div className="d-flex bill_input">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        placeholder="First Name*"
                      />
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        placeholder="Last Name*"
                      />
                    </div>

                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id=""
                      placeholder="Address (P.O. box, company name, c/o)*"
                    />
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id=""
                      placeholder="Address line 2 (Apartment, suite, unit)"
                    />

                    <div className="d-flex bill_input">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        placeholder="Postal Code*"
                      />
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        placeholder="Country*"
                      />
                    </div>
                  </div>

                  <div className="submit_btn">
                    <button type="submit">Pay Now</button>
                  </div>
                </form>
              </div>
            )}
            {showPaypal && (
              <div className="paypal">
                <h5>Sign in to PayPal</h5>
                <a href="#" target="_blank">
                  <img src={paypal} alt="" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
