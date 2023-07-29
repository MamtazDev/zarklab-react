import React, { useContext, useRef, useState } from "react";
import applePay from "../assets/image/apple_pay.png";
import paypal from "../assets/image/paypal.png";
import applePayModal from "../assets/image/apple_pay_modal.png";
import done from "../assets/image/done.png";
import profile from "../assets/image/profile_img.png";
import { AuthContext } from "../contexts/AuthContext";
import { PayPalButton } from "../utils/payments/PaypalPayment";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../utils/payments/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const public_key = "pk_test_Pq2BDpPTNhfsFHllBvY2GV6700TYOgJ1cD";
const secret_key = "sk_test_pggpOl1FECwCoLsgXDTQjtjF00An8mKwrj";
const stripePromise = loadStripe(public_key);
const id = 123;

const PaymentDetails = () => {
  const { user, setUser } = useContext(AuthContext);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: `${id}_secret_${secret_key}`,
  };

  const [showCredit, setShowCredit] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);
  const resultRef = useRef();
  const paypalResultRef = useRef();

  const handleCredit = () => {
    setShowCredit(true);
    setShowPaypal(false);
    handleButtonClick();
  };
  const handlePaypal = () => {
    setShowCredit(false);
    setShowPaypal(true);
    handlePaypalClick();
  };

  const handleButtonClick = () => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePaypalClick = () => {
    if (paypalResultRef.current) {
      paypalResultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="payment">
      <h4>Payment Details</h4>
      <div className="payment_option">
        <form>
          <h3 style={{ marginBottom: "18px" }}>Recurring billing payment</h3>

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
                    <img className="img-fluid" src={applePayModal} alt="" />
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
                          JANE APPLESEED 27 FREDBERICK BUTTE RD BROTHERS, OR
                          97712
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
                            <p style={{ marginBottom: "19px" }}>PAY ZARKLAB</p>
                          </div>
                          <div>
                            <span>$200</span>
                            <p className="payable">$200</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div
                      style={{ cursor: "pointer" }}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="done text-center"
                    >
                      <img className="img-fluid center" src={done} alt="" />
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
        <>
          <div ref={resultRef} className="credit_card">
            <form action="">
              <div className="form_data" id="card-number">
                <label className="form-label">Card Number</label>
                <input className="form-control w-100" type="text" name="" />
              </div>

              <div className="d-lg-flex justify-content-between">
                <div className="form_data">
                  <label className="form-label">Expiration Date (MM/ YY)</label>
                  <div className="d-flex justify-content-between align-items-center gap-2 gap-lg-4">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <p>/</p>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="23">2023</option>
                      <option value="24">2024</option>
                      <option value="25">2025</option>
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
                    <h4>{user ? user : "Penzie"}</h4>
                    <p>Personal Account</p>
                  </div>
                </div>

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
                <button type="submit">Pay Now</button>
              </div>
            </form>
          </div>

          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </>
      )}
      {showPaypal && (
        <div className="paypal">
          <h5>Sign in to PayPal</h5>
          <a href="#" target="_blank">
            <img src={paypal} alt="" />
          </a>
          {/* <PayPalButton /> */}
          {/* <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements> */}
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
