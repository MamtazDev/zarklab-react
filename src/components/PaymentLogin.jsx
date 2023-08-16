import React, { useContext, useState } from "react";
import eye from "../assets/image/password_eye.png";
import grayeye from "../assets/image/sign_up_pass_eye.png";
import { AuthContext } from "../contexts/AuthContext";
import { Auth } from "aws-amplify";

const dashboard_domain = import.meta.env.VITE_dashboard_domain;

const PaymentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInValue, setSignInValue] = useState({});
  const [signInError, setSignInError] = useState("");
  const { user } = useContext(AuthContext);

  const signInHandler = async (event) => {
    event.preventDefault();
    try {
      const username = signInValue?.email;
      const password = signInValue?.password;

      console.log(username, "userrrename");
      console.log(password, "passs");

      const user = await Auth.signIn(username, password);

      if (user) {
        setSignInError("");

        window.location.replace(dashboard_domain);
      }
    } catch (error) {
      console.log(error);
      const message = `${error}`;
      const errorMessage = message.split(":")[1].trim();
      setSignInError(errorMessage);
    }
  };

  const handlesignInChange = (event) => {
    setSignInValue({
      ...signInValue,
      [event.target.name]: event.target.value,
    });
  };

  console.log(signInValue, "fjksfjkjs");

  return (
    <div className="payment_login">
      <h6>Log in to your account</h6>
      <p>
        Not a member yet? <a href="">Create an account</a>{" "}
      </p>
      <form onSubmit={signInHandler}>
        <div className="row">
          <div className="col-12 col-lg-6">
            <label>Email Address</label>
            <input
              className="w-100"
              type="email"
              name="email"
              value={signInValue.email}
              onChange={handlesignInChange}
              autoComplete="off"
            />
          </div>
          <div className="col-12 col-lg-6">
            <label>Password </label>
            <div className="position-relative">
              <input
                className="w-100"
                type={showPassword ? "text" : "password"}
                name="password"
                value={signInValue.password}
                onChange={handlesignInChange}
                autoComplete="off"
              />
              <img
                onClick={() => setShowPassword(!showPassword)}
                style={{ top: "42%", right: "20px", cursor: "pointer" }}
                className="position-absolute  img-fluid"
                src={showPassword ? eye : grayeye}
                alt=""
              />
            </div>
          </div>
        </div>
        <button type="submit" className="continue_btn mt-4">
          Log In
        </button>
        <p className="warning_sms mt-2">{signInError}</p>
      </form>
    </div>
  );
};

export default PaymentLogin;
