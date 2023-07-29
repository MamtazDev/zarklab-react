import React from "react";
import socialMedia from "../assets/image/social-media.png";

const SocialMedia = () => {
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
            <div className="signUp">
              <input type="email" placeholder="Email Address" />
              <button>Sign up</button>
            </div>
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
