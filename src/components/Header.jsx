import React, { useState } from "react";
import logo from "../assets/image/logo.png";
import nextArrow from "../assets/image/next-arrow.png";
import signUp from "../assets/image/sign_up.png";
import metamask from "../assets/image/metamask.png";
import google from "../assets/image/google.png";
import fb from "../assets/image/fb.png";
import eye from "../assets/image/sign_up_pass_eye.png";
import code from "../assets/image/enter_code.png";
import back from "../assets/image/back_button.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [addBg, setAddBg] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [createPassword, setCreatePassword] = useState(false);
  const [userName, setUserName] = useState(false);

  return (
    <header>
      <nav className={`${addBg ? "bg-black" : ""} navbar navbar-expand-lg `}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <button
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
                  to="./pricing"
                >
                  Pricing{" "}
                  <img className="d-block d-md-none" src={nextArrow} alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <a
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
                  <div className="d-flex align-items-center gap-1 mb-2 position-relative">
                    <img src={signUp} alt="" />
                    <input
                      className="form-control"
                      type="password"
                      name=""
                      id="passwordInput"
                      placeholder="*******"
                    />
                    <img
                      className="position-absolute end-0 img-fluid mb-2"
                      src={eye}
                      alt=""
                      id="eyeIcon"
                    />
                  </div>
                  <a
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal_forgetPassword"
                  >
                    Forgot password?
                  </a>
                  <div className="d-flex justify-content-between align-items-center sign_in_btn">
                    <button type="submit">Sign in</button>
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

                    <form action="">
                      <label className="form-label">Enter your email*</label>
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                        <div className="d-flex align-items-center gap-1">
                          <img src={signUp} alt="" />
                          <input
                            className="form-control"
                            type="email"
                            name=""
                            id=""
                            placeholder="Email"
                          />
                        </div>
                        <p
                          onClick={() => setCreatePassword(true)}
                          className="continue_btn"
                        >
                          Continue
                        </p>
                      </div>
                    </form>
                  </div>
                  {createPassword && (
                    <div className="password" style={{ marginTop: "12px" }}>
                      <form action="" className="signup_modal">
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
                                type="password"
                                name=""
                                id="passwordInput_2"
                                placeholder="*******"
                              />
                              <img
                                className="position-absolute end-0 img-fluid mb-2"
                                src="./assets/image/sign_up_pass_eye.png"
                                alt=""
                              />
                            </div>
                            <div className="password_strong d-flex gap-1 mb-5">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <div className="d-lg-none d-block">
                              <h5>Password is strong</h5>
                              <h6>
                                {" "}
                                Make sure it’s at least 8 characters including a
                                number and a lowercase letter
                              </h6>
                            </div>
                          </div>
                          <p
                            className="pass_btn"
                            onClick={() => setUserName(true)}
                          >
                            Continue
                          </p>
                        </div>
                        <div className="d-none d-lg-block">
                          <h5>Password is strong</h5>
                          <h6>
                            {" "}
                            Make sure it’s at least 8 characters including a
                            number and a lowercase letter
                          </h6>
                        </div>
                      </form>
                    </div>
                  )}

                  {userName && (
                    <div className=" user_name" style={{ marginTop: "12px" }}>
                      <form action="" className="signup_modal">
                        <label className="form-label"> Enter a username*</label>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                          <div className="d-flex align-items-center gap-1">
                            <img src={signUp} alt="" />
                            <input
                              className="form-control"
                              type="text"
                              name=""
                            />
                          </div>
                          <p
                            onClick={() => setModalStep(2)}
                            className="userName_btn"
                          >
                            Continue
                          </p>
                        </div>
                      </form>
                    </div>
                  )}
                </>
              )}
              {modalStep === 2 && (
                <div className="enter_code">
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
                    Almost there! We’ve sent a code to{" "}
                    <span>penelope@zarklab.ai</span>{" "}
                  </p>
                  <form action="">
                    <div className="d-flex align-items-center mb-4">
                      <img src={code} alt="" />
                      <h4>Enter Code</h4>
                    </div>
                    <div className="d-flex gap-2 mb-5">
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6>Didn’t receive the code?</h6>
                        <h6>
                          <a href="">Resend the code</a> or{" "}
                          <a href="">update your email address</a>
                        </h6>
                      </div>
                      <p
                        onClick={() => setModalStep(3)}
                        className="userName_btn"
                      >
                        Continue
                      </p>
                    </div>
                  </form>
                </div>
              )}

              {modalStep === 3 && (
                <div className="enter_code enter_code_after">
                  <h4 className="mb-5">You’re Set to Go!</h4>
                  <form action="">
                    <div className="d-flex align-items-center mb-4">
                      <img src={code} alt="" />
                      <h4>Enter Code</h4>
                    </div>
                    <div className="d-flex gap-2 mb-5">
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                      <input type="number" name="" id="" maxLength="1" />
                    </div>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-lg-5 gap-3">
                      <div>
                        <h6>Enter ZarkLab Now</h6>
                        <p></p>
                      </div>
                      <span>
                        <Link to="/payment">Upgrade Plan</Link>
                      </span>
                    </div>
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
