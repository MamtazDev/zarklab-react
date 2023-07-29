import React, { useContext } from "react";
import profile from "../../assets/image/profile_img.png";
import { AuthContext } from "../../contexts/AuthContext";

const CustomCard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="credit_card">
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
  );
};

export default CustomCard;
