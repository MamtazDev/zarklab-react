import React from 'react';
import pricemanipulation from "../assets/image/price-manipulation.png";

const PriceManipulation = () => {
    return (
        <section className="pricing">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                      <img
                        className="d-none d-lg-block img-fluid"
                        src={pricemanipulation}
                        alt=""
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <h6 className="title  text-lg-end">
                        price manipulation WARNING
                      </h6>
                      <h1 className="content text-lg-end">
                        Detect Token Selloffs and Bad Actors. Your Crypto
                        Spider-Sense
                      </h1>
                      <p className="paragraph text-lg-end">
                        Stay ahead of fraudsters with our state-of-the-art
                        Artificial Intelligence engine. Receive real-time
                        notifications on founding teams engaging in selling
                        activities, and uncover token price manipulation as it
                        occurs across any Blockchain ecosystem.
                      </p>
                      <img
                        className="d-block d-lg-none img-fluid"
                        src={pricemanipulation}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </section>
    );
};

export default PriceManipulation;