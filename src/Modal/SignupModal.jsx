import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Amplify, Auth } from "aws-amplify";

const SignupModal = ({
  signUp,
  passwordArrow,
  eye,
  grayeye,
  back,
  code,
  AwsConfigAuth,
}) => {
  const { user, setUser, signUpRef, email, setEmail } = useContext(AuthContext);

  Amplify.configure({ Auth: AwsConfigAuth });

  const [modalStep, setModalStep] = useState(1);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [createPassword, setCreatePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signUPValue, setSignUpValue] = useState({});
  const [userName, setUserName] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [signUpError, setSignupError] = useState("");
  const [userSub, setUserSub] = useState(null);
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const signUpHandler = async (event) => {
    event.preventDefault();
    //console all state
    // close triger eikahne likhben
    setSignUpValue({
      ...signUPValue,
      email,
      password,
      userName,
      otp,
    });

    if (email && password) {
      try {
        const result = await Auth.signUp({
          username: email,
          password: password,

          attributes: {
            preferred_username: user,
            email,
          },
          autoSignIn: {
            enabled: true,
          },
        });

        if (!result.userConfirmed) {
          // setdisplayOTPInput(true)
        }

        if (result?.userSub) {
          setUserInfo(result);
          setUserSub(result?.userSub);
          setSignupError("");
          setModalStep(2);
        }
        console.log(result);
      } catch (error) {
        const message = `${error}`;
        const errorMessage = message.split(":")[1].trim();
        setSignupError(errorMessage);
        console.log(error);
      }
    }
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)/;
    return passwordRegex.test(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsValid(validatePassword(value));
  };

  const getPasswordStrengthLabel = (value) => {
    if (value.length === 0) {
      return "Please enter a password";
    } else if (!validatePassword(value)) {
      return "Invalid password";
    } else if (value.length < 6) {
      return "Password is weak";
    } else if (value.length >= 6) {
      return "Password is strong";
    }
  };

  const passwordStrengthLabel = getPasswordStrengthLabel(password);

  const handleChange = async (index, value) => {
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

    if (index === 5) {
      const code = newOtp.join("");
      const username = email;
      try {
        const result = await Auth.confirmSignUp(username, code);
        if (result === "SUCCESS") {
          setSignupError("");
          setIsOtpVerified(true);
        }
      } catch (error) {
        const message = `${error}`;
        const errorMessage = message.split(":")[1].trim();
        setSignupError(errorMessage);
        console.log(error);
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      // Focus on the previous input field when Backspace is pressed
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal_1"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            {modalStep === 1 && (
              <>
                <div className="signup_modal">
                  <h3 className="mb-2">Welcome to ZarkLab! </h3>
                  <h3 className="mb-4">
                    Experience the new world of AI in Crypto{" "}
                  </h3>

                  <form onSubmit={signUpHandler}>
                    <label className="form-label">Enter your email*</label>
                    <div className="d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap gap-4">
                      <div className="d-flex align-items-center gap-1 w-100">
                        <img src={signUp} alt="" />
                        <input
                          className="form-control w-100"
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleEmail}
                          placeholder="Email"
                          autoComplete="off"
                        />
                      </div>
                      {/* {!isEmailValid && <p className="text-white">email is not valid</p> } */}
                      {!isEmailValid && !email ? (
                        // <p className="text-white"></p>""
                        ""
                      ) : (
                        <p
                          onClick={() => setCreatePassword(true)}
                          className={createPassword ? "d-none" : "continue_btn"}
                        >
                          Continue
                        </p>
                      )}
                    </div>
                    {createPassword && (
                      <div className="password" style={{ marginTop: "12px" }}>
                        <div className="signup_modal">
                          <div className="d-flex justify-content-between align-items-center flex-lg-nowrap flex-wrap w-100 gap-4">
                            <div className="w-100">
                              <label className="form-label">
                                Create a password*
                              </label>
                              <div className="d-flex align-items-center gap-1 mb-3 position-relative">
                                <img src={passwordArrow} alt="" />
                                <input
                                  className="form-control"
                                  type={showPassword ? "text" : "password"}
                                  value={password}
                                  onChange={handlePasswordChange}
                                  placeholder="*******"
                                  autoComplete="off"
                                />
                                <img
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="position-absolute end-0 img-fluid mb-2"
                                  src={showPassword ? eye : grayeye}
                                  alt=""
                                />
                              </div>
                              <div className="password_strong d-flex gap-1 mb-1">
                                {passwordStrengthLabel ===
                                  "Password is weak" && <span></span>}
                                {passwordStrengthLabel ===
                                  "Password is medium" && (
                                  <>
                                    <span></span>
                                    <span></span>
                                  </>
                                )}
                                {passwordStrengthLabel ===
                                  "Password is strong" && (
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
                                  Make sure it’s at least 8 characters including
                                  a number and a lowercase letter
                                </h6>
                              </div>
                            </div>
                            {!userName && (
                              <p
                                className={isValid ? "pass_btn" : "d-none"}
                                onClick={() => setUserName(true)}
                              >
                                Continue
                              </p>
                            )}
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
                    )}
                    {userName && (
                      <div className=" user_name" style={{ marginTop: "12px" }}>
                        <div className="signup_modal">
                          <label className="form-label">
                            {" "}
                            Enter a username*
                          </label>
                          <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                            <div className="d-flex align-items-center gap-1">
                              <img src={signUp} alt="" />
                              <input
                                className="form-control"
                                type="text"
                                onChange={(e) => setUser(e.target.value)}
                                autoComplete="off"
                              />
                            </div>
                            <button type="submit" className="userName_btn">
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                  <p className="text-danger">{signUpError}</p>
                </div>
              </>
            )}
            {modalStep === 2 && (
              <div className="enter_code">
                {isOtpVerified && (
                  <div className="enter_code_after">
                    <h4 className=" mb-5">You’re Set to Go!</h4>
                  </div>
                )}
                {!isOtpVerified && (
                  <>
                    <button
                      onClick={() => setModalStep(1)}
                      className="bg-transparent border-none back_btn"
                    >
                      <img src={back} alt="" style={{ marginRight: "15px" }} />{" "}
                      Back
                    </button>
                    <div className="d-flex align-items-center mb-2">
                      <h4>Verify your account </h4>
                    </div>
                    <p className="mb-5">
                      Almost there! We’ve sent a code to <span>{email}</span>{" "}
                    </p>
                  </>
                )}

                <form action="">
                  <div className="d-flex align-items-center mb-4">
                    <img src={code} alt="" />
                    <h4>Enter Code</h4>
                  </div>

                  <div className="otp-input d-flex gap-2 mb-5">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        disabled={isOtpVerified}
                        type="number"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        autoComplete="off"
                      />
                    ))}
                  </div>
                  <p className="text-danger">{signUpError}</p>

                  {!isOtpVerified && (
                    <div>
                      <h6>Didn’t receive the code?</h6>
                      <h6>
                        <a href="#">Resend the code</a>
                      </h6>
                    </div>
                  )}

                  {isOtpVerified && (
                    <div className="enter_code_after d-flex flex-column flex-lg-row align-items-center justify-content-center gap-lg-5 gap-3">
                      <div>
                        <Link
                          style={{ textDecoration: "none" }}
                          target="_blank"
                          to="https://zarklab-dashboard-new-pro.vercel.app/"
                        >
                          <h6>Enter ZarkLab Now</h6>
                        </Link>
                        <p></p>
                      </div>
                      <span data-bs-dismiss="modal" aria-label="Close">
                        <Link to="/payment">Upgrade Plan</Link>
                      </span>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
