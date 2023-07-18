import React from "react";
import logo from "../assets/image/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img src={logo} alt="" />
        <h6>
          A Trusted Blockchain Platform to protect the community, one user at a
          time.
        </h6>
        <hr style={{ marginBottom: "23px" }} className="opacity-100 mt-0" />
        <div className="d-flex align-items-center flex-wrap justify-content-between">
          <p>© Copyright ZarkLab 2023. All Rights Reserved.</p>
          <div className="privacy d-flex">
            <a href="#">Disclaimer</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
