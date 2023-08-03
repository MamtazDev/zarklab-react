import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

const PasswordForgetModal = ({
  signUp,
  fb,
  google,
  metamask,
  code,
  grayeye,
  eye,
  passwordArrow,
}) => {
  const [modalStep, setModalStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);
  const [signInValue, setSignInValue] = useState({});
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [username, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const closeSignInModal = useRef(null);

  const handleNext = async () => {
    if (username) {
      try {
        const data = await Auth.forgotPassword(username);
        if (data) {
          setErrorMessage("");
          setModalStep((prev) => prev + 1);
        }
      } catch (err) {
        const message = `${err}`;
        const errorMessage = message.split(":")[1].trim();
        setErrorMessage(errorMessage);
        console.log(err);
      }
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsValid(validatePassword(value));
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(value);
  };

  const handleChange = (index, value) => {
    if (value.length > 1) {
      return; // Do not update if the value exceeds one character
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus on the next input field
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      // Focus on the previous input field when Backspace is pressed
      inputRefs.current[index - 1].focus();
    }
  };

  const getPasswordStrengthLabel = (value) => {
    if (value.length === 0) {
      return "Please enter a password";
    } else if (value.length < 6) {
      return "Password is weak";
    } else if (value.length < 8) {
      return "Password is medium";
    } else if (value.length === 8 && !isValid) {
      return "Invalid password";
    } else if (value.length === 8 && isValid) {
      return "Password is strong";
    } else {
      return "Invalid password";
    }
  };

  const passwordStrengthLabel = getPasswordStrengthLabel(password);

  const handleReEnterPassword = (e) => {
    const value = e.target.value;
    setReEnterPassword(value);

    if (value === password) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  };

  const handleChangePasswordSubmit = async (e) => {
    e.preventDefault();

    const code = otp.join("");
    const newPassword = password;

    try {
      const data = await Auth.forgotPasswordSubmit(username, code, newPassword);
      //   closeSignInModal.current.click();
      if (data === "SUCCESS ") {
        setErrorMessage("");
        closeSignInModal.current.click();
        window.location.replace(
          "https://zarklab-dashboard-new-pro.vercel.app/token"
        );
      }
    } catch (err) {
      const message = `${err}`;
      const errorMessage = message.split(":")[1].trim();
      setErrorMessage(errorMessage);
      console.log(err);
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal_forgetPassword"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <button
              ref={closeSignInModal}
              type="button"
              class="btn-close d-none"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            {modalStep === 1 && (
              <div className="signIn_modal">
                <h2 className="mb-3">
                  Don’t worry, we’re all a little forgetful sometimes.
                </h2>
                <h6 className="text-white mb-5">
                  Enter your email to retrieve your password.
                </h6>

                <div className="d-flex align-items-center gap-1 mb-5">
                  <img src={signUp} alt="" />
                  <input
                    className="form-control"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <p className="text-danger">{errorMessage}</p>
                <div className="sign_in_btn text-center">
                  <button onClick={handleNext} style={{ marginBottom: "24px" }}>
                    Retrieve Password
                  </button>
                  <p>
                    Not a member yet?{" "}
                    <a
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal_1"
                    >
                      Create an account
                    </a>
                  </p>
                </div>

                <hr />

                <h3>Or sign in with</h3>
                <div className="d-flex justify-content-between align-items-center social_login">
                  <a href="#">
                    <img className="img-fluid" src={fb} />
                  </a>
                  <a href="#">
                    <img className="img-fluid" src={google} />
                  </a>
                  <a href="#">
                    <img className="img-fluid" src={metamask} />
                  </a>
                </div>
              </div>
            )}

            {modalStep === 2 && (
              <>
                <div className="passwordChange_modal">
                  <h3 className="mb-4">
                    We’ve sent a password reset code to {username}. Enter it
                    below to reset your password.
                  </h3>
                  <form onSubmit={handleChangePasswordSubmit}>
                    <p>Code</p>
                    <div className="enter_code d-flex gap-2 mb-5">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="number"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          ref={(ref) => (inputRefs.current[index] = ref)}
                        />
                      ))}
                    </div>

                    <div
                      className="signup_modal password"
                      style={{ padding: "0px" }}
                    >
                      <div className="d-flex justify-content-between align-items-center flex-lg-nowrap flex-wrap w-100 gap-4">
                        <div className="w-100">
                          <label
                            className="form-label"
                            style={{ color: "#59F5FF" }}
                          >
                            New Password
                          </label>
                          <div className="d-flex align-items-center gap-1 mb-3 position-relative">
                            <img src={passwordArrow} alt="" />
                            <input
                              className="form-control"
                              type={showPassword ? "text" : "password"}
                              value={password}
                              maxLength={8}
                              onChange={handlePasswordChange}
                              placeholder="*******"
                            />
                            <img
                              onClick={() => setShowPassword(!showPassword)}
                              className="position-absolute end-0 img-fluid mb-2"
                              src={showPassword ? eye : grayeye}
                              alt=""
                            />
                          </div>
                          <div className="password_strong d-flex gap-1 mb-1">
                            {passwordStrengthLabel === "Password is weak" && (
                              <span></span>
                            )}
                            {passwordStrengthLabel === "Password is medium" && (
                              <>
                                <span></span>
                                <span></span>
                              </>
                            )}
                            {passwordStrengthLabel === "Password is strong" && (
                              <>
                                <span></span>
                                <span></span>
                                <span></span>
                              </>
                            )}
                          </div>
                          <div className="d-lg-none d-block">
                            <h5>{passwordStrengthLabel}</h5>
                            <h6>
                              {" "}
                              Make sure it’s at least 8 characters including a
                              number and a lowercase letter
                            </h6>
                          </div>
                          <div className="d-none d-lg-block">
                            <h5>{passwordStrengthLabel}</h5>
                            <h6>
                              {" "}
                              Make sure it’s at least 8 characters including a
                              number and a lowercase letter
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="signup_modal password"
                      style={{ padding: "0px", marginTop: "35px" }}
                    >
                      <div className="d-flex justify-content-between align-items-center flex-lg-nowrap flex-wrap w-100 gap-4">
                        <div className="w-100">
                          <label
                            className="form-label"
                            style={{ color: "#D255D1" }}
                          >
                            Re-enter New Password
                          </label>
                          <div className="d-flex align-items-center gap-1  position-relative">
                            <img src={passwordArrow} alt="" />
                            <input
                              className="form-control"
                              type={showReEnterPassword ? "text" : "password"}
                              value={reEnterPassword}
                              maxLength={8}
                              onChange={handleReEnterPassword}
                              placeholder="*******"
                            />
                            <img
                              onClick={() =>
                                setShowReEnterPassword(!showReEnterPassword)
                              }
                              className="position-absolute end-0 img-fluid mb-2"
                              src={showPassword ? eye : grayeye}
                              alt=""
                            />
                          </div>

                          <div className="d-lg-none d-block">
                            <h5
                              style={{
                                color: "#F03C14",
                                fontSize: "10px",
                                fontWeight: "400",
                              }}
                            >
                              {!isMatched && "Password does not match"}
                            </h5>
                          </div>
                          <div className="d-none d-lg-block">
                            <h5
                              style={{
                                color: "#F03C14",
                                fontSize: "10px",
                                fontWeight: "400",
                              }}
                            >
                              {!isMatched && "Password does not match"}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-danger">{errorMessage}</p>
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginTop: "30px" }}
                    >
                      <button type="submit" className="changePasswordButton ">
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordForgetModal;
