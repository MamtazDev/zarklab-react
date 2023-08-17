import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/image/logo.png";
import nextArrow from "../assets/image/next-arrow.png";
import passwordArrow from "../assets/image/password_arrow.png";
import signUp from "../assets/image/sign_up.png";
import metamask from "../assets/image/metamask.png";
import google from "../assets/image/google.png";
import fb from "../assets/image/fb.png";
import eye from "../assets/image/password_eye.png";
import grayeye from "../assets/image/sign_up_pass_eye.png";
import code from "../assets/image/enter_code.png";
import back from "../assets/image/back_button.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Amplify, Auth } from "aws-amplify";
import PasswordForgetModal from "../utils/PasswordForgetModal";
import SignupModal from "../Modal/SignupModal";

const AwsConfigAuth_region = import.meta.env.VITE_AwsConfigAuth_region;
const AwsConfigAuth_userPoolId = import.meta.env.VITE_AwsConfigAuth_userPoolId;
const mainwebsite_domain = import.meta.env.mainwebsite_domain;
const dashboard_domain = import.meta.env.VITE_dashboard_domain;
const AwsConfigAuth_authenticationFlowType = import.meta.env
  .VITE_AwsConfigAuth_authenticationFlowType;
const AwsConfigAuth_userPoolWebClientId = import.meta.env
  .VITE_AwsConfigAuth_userPoolWebClientId;

// AUTH_COOKIE_STORAGE_DOMAIN
const AwsConfigAuth = {
  region: AwsConfigAuth_region,
  userPoolId: AwsConfigAuth_userPoolId,
  userPoolWebClientId: AwsConfigAuth_userPoolWebClientId,
  cookieStorage: {
    domain: mainwebsite_domain,
    path: "/",
    expires: 365,
    sameSite: "strict",
    secure: true,
  },
  authenticationFlowType: AwsConfigAuth_authenticationFlowType,
};

const Header = ({ signinRef }) => {
  Amplify.configure({ Auth: AwsConfigAuth });
  const location = useLocation();
  const navigate = useNavigate();

  const { user, setUser, signUpRef, email, setEmail } = useContext(AuthContext);
  const [addBg, setAddBg] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [createPassword, setCreatePassword] = useState(false);

  const [signInValue, setSignInValue] = useState({});
  const [signInError, setSignInError] = useState("");


  const hamburgerRef = useRef();
  const closeSignInModal = useRef(null);



  const handlesignInChange = (event) => {
    setSignInValue({
      ...signInValue,
      [event.target.name]: event.target.value,
    });
  };



  const signInHandler = async (event) => {
    event.preventDefault();
    try {
      const username = signInValue?.email;
      const password = signInValue?.password;

      const user = await Auth.signIn(username, password);

  

      if (user) {
        setSignInError("");
        localStorage.setItem("zarklab-user", JSON.stringify("SingedIn"));
        setUser(true);

        closeSignInModal.current.click();
        location.pathname === "/pricing"
          ? navigate("/payment")
          : window.open(dashboard_domain, "_blank");
      }
    } catch (error) {
      console.log(error);
      const message = `${error}`;

      if (message.includes(":")) {
        const errorMessage = message.split(":")[1].trim();
        setSignInError(errorMessage);
      } else {
        setSignInError(error);
      }
    }
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
            <img style={{ width: "164px" }} src={logo} alt="" />
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
                  ref={signinRef}
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
                  ref={signUpRef}
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
                      autoComplete="off"
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
                      autoComplete="off"
                    />
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                      className="position-absolute end-0 img-fluid mb-2"
                      src={showPassword ? eye : grayeye}
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
                        className="ms-2"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal_1"
                      >
                        Create an account
                      </a>
                    </p>
                  </div>
                  <p className="text-danger">{signInError}</p>
                  <hr />
                  <h3>Or sign in with</h3>
                  <div className="d-flex justify-content-between align-items-center social_login">
                    <a href="#">
                      <img className="img-fluid" src={fb} />
                    </a>
                    <a className="goo_btn" href="#">
                      <img className="img-fluid" src={google} /> Sign in with
                      Google
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

      <PasswordForgetModal
        metamask={metamask}
        google={google}
        fb={fb}
        signUp={signUp}
        code={code}
        grayeye={grayeye}
        passwordArrow={signUp}
        eye={eye}
      />

      {/* <!-- Forgot password Modal End --> */}

      {/* <!-- Sign Up Modal Start --> */}
      <SignupModal
        signUp={signUp}
        passwordArrow={passwordArrow}
        eye={eye}
        grayeye={grayeye}
        back={back}
        code={code}
        AwsConfigAuth={AwsConfigAuth}
      />
      {/* <!-- Sign Up Modal End --> */}
    </header>
  );
};
export default Header;
