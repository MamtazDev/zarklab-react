import React, { useContext, useEffect, useRef, useState } from "react";
import applePay from "../assets/image/apple_pay.png";
import paypal from "../assets/image/paypal.png";
import applePayModal from "../assets/image/apple_pay_modal.png";
import done from "../assets/image/done.png";
import profile from "../assets/image/profile_img.png";
import { AuthContext } from "../contexts/AuthContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentDetails = () => {
  const { user, setUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

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

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 20,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);

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
              <PayPalScriptProvider options={{ "client-id": "fklsfjk" }}>
                <div>
                  <div className="wrapper">
                    <div className="product-img">
                      <img
                        src="https://cdn.pixabay.com/photo/2021/08/15/06/54/sunflower-6546993_1280.jpg"
                        alt="SunFlower"
                        height="320"
                        width="300"
                      />
                    </div>
                    <div className="product-info">
                      <div className="product-text">
                        <h1>Sunflower</h1>
                      </div>
                      <div className="product-price-btn">
                        <p>$20</p>
                        <br></br>
                        <a onClick={() => setShow(true)}>Buy now</a>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  {show ? (
                    <PayPalButtons
                      style={{ layout: "vertical" }}
                      createOrder={createOrder}
                      onApprove={onApprove}
                    />
                  ) : null}
                </div>
              </PayPalScriptProvider>
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
        <div ref={resultRef} className="credit_card">
          <form action="">
            <div className="form_data">
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
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="3">April</option>
                    <option value="3">May</option>
                    <option value="3">June</option>
                    <option value="3">July</option>
                    <option value="3">August</option>
                    <option value="3">September</option>
                    <option value="3">October</option>
                    <option value="3">November</option>
                    <option value="3">December</option>
                  </select>
                  <p>/</p>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    <option value="1">2023</option>
                    <option value="2">2024</option>
                    <option value="3">2025</option>
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
  );
};

export default PaymentDetails;
