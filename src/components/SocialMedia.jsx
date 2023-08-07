import React, { useContext } from "react";
import socialMedia from "../assets/image/social-media.png";
import { AuthContext } from "../contexts/AuthContext";

const SocialMedia = () => {
  const { email, setEmail, signUpRef } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    signUpRef.current.click();
  };

   return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="linear"
      className="socialmedia"
    >
      <div className="container">
        <div className="row ">
          <div className="col-12 col-lg-6">
            <h6 className="title">SOCIAL MEDIA AND SENTIMENT ANALYTICS </h6>
            <h1 className="content">Find the right Influencers to Follow</h1>
            <p className="paragraph">
              How much do Influencers impact Crypto Prices?A transparent
              Influencer ecosystem where you can monitor their wallets, online
              posts, comments, and recommendations.
            </p>
            <img
              className="d-block d-lg-none img-fluid"
              src={socialMedia}
              alt=""
            />
            <form className="signUp" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
              <button type="submit">Sign up</button>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <img
              className="d-none d-lg-block img-fluid"
              src={socialMedia}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
