import React, { useState } from "react";
import eye from "../assets/image/password_eye.png";
import grayeye from "../assets/image/sign_up_pass_eye.png";

const PaymentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="payment_login">
      <h6>Log in to your account</h6>
      <p>
        Not a member yet? <a href="">Create an account</a>{" "}
      </p>
      <form>
        <div className="row">
          <div className="col-12 col-lg-6">
            <label>Email Address</label>
            <input className="w-100" type="email" />
          </div>
          <div className="col-12 col-lg-6">
            <label>Password </label>
            <div className="position-relative">
              <input className="w-100" type="password" />
              <img
                onClick={() => setShowPassword(!showPassword)}
                style={{ top: "42%", right: "20px" }}
                className="position-absolute  img-fluid"
                src={showPassword ? eye : grayeye}
                alt=""
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentLogin;
