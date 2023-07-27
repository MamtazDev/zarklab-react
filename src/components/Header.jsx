import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/image/logo.png";
import nextArrow from "../assets/image/next-arrow.png";
import signUp from "../assets/image/sign_up.png";
import metamask from "../assets/image/metamask.png";
import google from "../assets/image/google.png";
import fb from "../assets/image/fb.png";
import eye from "../assets/image/password_eye.png";
import grayeye from "../assets/image/sign_up_pass_eye.png";
import code from "../assets/image/enter_code.png";
import back from "../assets/image/back_button.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Amplify, Auth } from "aws-amplify";

const AwsConfigAuth = {
  region: "us-east-1",
  userPoolId: "us-east-1_iJNzGNptL",
  userPoolWebClientId: "65n2hiu49tacap7h2hbr6idmv",
  cookieStorage: {
    domain: "AUTH_COOKIE_STORAGE_DOMAIN",
    path: "/",
    expires: 365,
    sameSite: "strict",
    secure: true,
  },
  authenticationFlowType: "USER_SRP_AUTH",
};

const Header = () => {
  Amplify.configure({ Auth: AwsConfigAuth });

  const [userInfo, setUserInfo] = useState(null);
  const [userSub, setUserSub] = useState(null);

  const { user, setUser } = useContext(AuthContext);
  const [addBg, setAddBg] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [createPassword, setCreatePassword] = useState(false);
  const [userName, setUserName] = useState(false);
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [signInValue, setSignInValue] = useState({});
  const [signUPValue, setSignUpValue] = useState({});

  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const hamburgerRef = useRef();
  const closeSignInModal = useRef(null);

  // otp code fill up activity
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

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

    console.log(index, "inddd");

    if (index === 5) {
      const code = newOtp.join("");
      const username = email;
      try {
        const result = await Auth.confirmSignUp(username, code);
        if (result === "SUCCESS") {
          setIsOtpVerified(true);
        }
      } catch (error) {
        console.log("error confirming sign up", error);
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      // Focus on the previous input field when Backspace is pressed
      inputRefs.current[index - 1].focus();
    }
  };

  const isFilled = otp.every((digit) => digit !== "");

  // password validation part

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsValid(validatePassword(value));
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(value);
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

  // email validation part
  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const validateEmail = (value) => {
    // Regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handlesignInChange = (event) => {
    setSignInValue({
      ...signInValue,
      [event.target.name]: event.target.value,
    });
  };

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
            preferred_username: "dihan",
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
          setModalStep(2);
        }
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    setModalStep(2);
  };

  console.log(signUPValue);
  const signInHandler = async (event) => {
    event.preventDefault();

    try {
      const user = await Auth.signIn(signInValue?.email, signInValue?.password);

      console.log(user, "uss");
    } catch (error) {
      console.log("error signing in", error);
    }

    //console all state
    // close triger eikahne likhben
    // closeSignInModal.current.click();
    console.log(signInValue, "signin");
  };

  useEffect(() => {
    async function checkAuth() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
      } catch (e) {
        // setEmail(undefined)
        // setPassword(undefined)
      }
    }
    checkAuth();
  }, []);

  return (
    <header>
      <nav className={`${addBg ? "bg-black" : ""} navbar navbar-expand-lg `}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img style={{ height: "51px", width: "164px" }} src={logo} alt="" />
          </Link>
          <button
            // ref={hamburgerRef}
            onClick={() => setAddBg(!addBg)}
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbar_bg"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-start align-items-lg-center ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center justify-content-between"
                  to="/pricing"
                >
                  Pricing
                  <img className="d-block d-md-none" src={nextArrow} alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => {
                    hamburgerRef.current.click();
                  }}
                  className="nav-link d-flex align-items-center justify-content-between"
                  aria-current="page"
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Sign in{" "}
                  <img className="d-block d-md-none" src={nextArrow} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => {
                    hamburgerRef.current.click();
                  }}
                  className="nav-link signup_btn"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal_1"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Sign In Modal Start --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="signIn_modal">
                <h2>Welcome Back!</h2>
                <form onSubmit={signInHandler}>
                  <button
                    ref={closeSignInModal}
                    type="button"
                    class="btn-close d-none"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <div className="d-flex align-items-center gap-1 mb-5">
                    <img src={signUp} alt="" />
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={signInValue.email}
                      onChange={handlesignInChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="d-flex align-items-center gap-1 mb-2 position-relative">
                    <img src={signUp} alt="" />
                    <input
                      className="form-control"
                      type={showPassword ? "text" : "password"}
                      placeholder="*******"
                      name="password"
                      value={signInValue.password}
                      onChange={handlesignInChange}
                    />
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                      className="position-absolute end-0 img-fluid mb-2"
                      src={showPassword ? grayeye : eye}
                      alt=""
                    />
                  </div>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal_forgetPassword"
                  >
                    Forgot password?
                  </a>
                  <div className="d-flex justify-content-between align-items-center sign_in_btn">
                    <button type="submit">Sign in</button>
                    <p>
                      Not a member yet?
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Sign In Modal End --> */}

      {/* <!-- Forgot password Modal Start --> */}

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
              <div className="signIn_modal">
                <h2 className="mb-3">
                  Don’t worry, we’re all a little forgetful sometimes.
                </h2>
                <h6 className="text-white mb-5">
                  Enter your email to retrieve your password.
                </h6>
                <form action="">
                  <div className="d-flex align-items-center gap-1 mb-5">
                    <img src={signUp} alt="" />
                    <input
                      className="form-control"
                      type="email"
                      name=""
                      id=""
                      placeholder="Email"
                    />
                  </div>

                  <div className="sign_in_btn text-center">
                    <button type="submit" style={{ marginBottom: "24px" }}>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Forgot password Modal End --> */}

      {/* <!-- Sign Up Modal Start --> */}
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
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                        <div className="d-flex align-items-center gap-1">
                          <img src={signUp} alt="" />
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                            placeholder="Email"
                          />
                        </div>
                        {/* {!isEmailValid && <p className="text-white">email is not valid</p> } */}
                        {!isEmailValid ? (
                          // <p className="text-white"></p>""
                          ""
                        ) : (
                          <p
                            onClick={() => setCreatePassword(true)}
                            className={
                              createPassword ? "d-none" : "continue_btn"
                            }
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
                                  <img
                                    src="./assets/image/password_arrow.png"
                                    alt=""
                                  />
                                  <input
                                    className="form-control"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    maxLength={8}
                                    onChange={handlePasswordChange}
                                    placeholder="*******"
                                  />
                                  <img
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                    className="position-absolute end-0 img-fluid mb-2"
                                    src={showPassword ? grayeye : eye}
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
                                    Make sure it’s at least 8 characters
                                    including a number and a lowercase letter
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
                        <div
                          className=" user_name"
                          style={{ marginTop: "12px" }}
                        >
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
                        <img
                          src={back}
                          alt=""
                          style={{ marginRight: "15px" }}
                        />{" "}
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
                        />
                      ))}
                    </div>

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
      {/* <!-- Sign Up Modal End --> */}
    </header>
  );
};

export default Header;
