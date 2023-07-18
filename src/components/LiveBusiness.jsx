import React from "react";
import liveBusiness from "../assets/image/live-business.png";

const LiveBusiness = () => {
  return (
    <section className="business">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <img
              className="d-none d-lg-block img-fluid"
              src={liveBusiness}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6">
            <h6 className="title text-lg-end">
              LIVE BUSINESS AND ECOSYSTEM DATA{" "}
            </h6>
            <h1 className="content text-lg-end">
              Unparalleled blockchain benchmarking metrics
            </h1>
            <p className="paragraph text-lg-end">
              Discover valuable insights across diverse blockchains and
              tokenized entities with understanding of user demographics,
              project dynamics, growth rates, and more.
            </p>
            <img
              className="d-block d-lg-none img-fluid"
              src={liveBusiness}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveBusiness;
