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
          
            <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
          </div>

        
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
