import React from 'react';

const Faq = () => {
    return (
        <div className="faq">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <h1>Frequently Asked Questions</h1>
              <p>
                If you have further questions, please drop us an email at
                hello@zarklab.ai with your name and query. Our team will be
                happy to assist you in getting started with ZarkLab.
              </p>
              <button className="contact_btn">Contact Us</button>
            </div>
            <div className="col-12 col-lg-6">
              <div className="faq_accordion">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is ZarkLab about?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        ZarkLab is a AI-driven one-stop platform built to
                        address the complexities of Crypto. We provide in
                        depth yet consumer friendly insights into the Crypto
                        space including market trends, price movements,
                        portfolio performance, and other valuable information.
                      </div>
                    </div>
                  </div>
                  <hr className="opacity-100" />
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I track multiple Cryptocurrencies and Wallets on
                        ZarkLab?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Absolutely! Our platform currently supports all
                        cryptocurrencies on the Ethereum Blockchain. We're
                        working on adding more Blockchains to ZarkLab. Stay
                        updated by signing up with us!
                      </div>
                    </div>
                  </div>
                  <hr className="opacity-100" />
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What kind of insights does ZarkLab provide?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        ZarkLab leverages advanced Artificial Intelligence to
                        conduct comprehensive cryptocurrency due diligence,
                        analyze wallet behaviour, market trends, and identify
                        price manipulation and fraudulent activities
                        proactively. Sign up now to find out more!
                      </div>
                    </div>
                  </div>
                  <hr className="opacity-100" />
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How much does it cost to use ZarkLab?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Our pricing plans are designed to offer flexibility
                        and cater to different user needs. For those looking
                        to jumpstart your journey into Crypto, ZarkLab offers
                        a free version which provides access to basic and
                        essential features and metrics.
                        <br />
                        For deeper insights, users can subscribe to our PRO
                        version at $20.99 monthly and unlock a wealth of
                        additional features, including 100+ more metrics at
                        faster speed, allowing you to react swiftly to market
                        changes. Please refer to our pricing page for more
                        information.
                      </div>
                    </div>
                  </div>
                  <hr className="opacity-100" />
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What are the key AI techniques used by ZarkLab for
                        cryptocurrency analytics?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        ZarkLab leverages a range of advanced Artificial
                        Intelligence such as NLP, BERT, RNN, and more to not
                        only detect but predict the Crypto space for users to
                        take proactive actions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;