import React from "react";
import arrowFill from "../assets/image/arrow-fill.png";
import visa from "../assets/image/visa.png";
import aws from "../assets/image/aws.png";
import mit from "../assets/image/mit.png";
import kpm from "../assets/image/kpm.png";
import cruptoChat from "../assets/image/cryptochat.png";

const CruptoChat = () => {
  return (
    <div>
      {/* <!-- First Section for time line --> */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="linear"
        className="launch_app"
      >
        <div className="container">
          <div className="d-flex gap-5 align-items-center">
            <div>
              <button>
                Launch App <img src={arrowFill} alt="" />
              </button>
              <p>Trusted by World leading Organisations</p>
              <div className="brand d-flex  flex-wrap">
                <img src={visa} alt="" />
                <img src={aws} alt="" />
                <img src={mit} alt="" />
                <img src={kpm} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="linear" className="crypto">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-lg-6">
              <h6 className="title">CRYPTO CHAT</h6>
              <h1 className="content">
                Simplifying the Complex with Blockchain Educate AI for Everyone
              </h1>
              <p className="paragraph">
                ChatGPT for all things Crypto. Experience the power of
                simplified insights at your fingertips. Our integrated AI tools
                leverage extensive blockchain ecosystem data to provide
                personalized and instant answers that cater to your unique
                needs.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img className="img-fluid" src={cruptoChat} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CruptoChat;
