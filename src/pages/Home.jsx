import React from "react";
import Faq from "../components/Faq";
import Banner from "../components/Banner";
import CruptoChat from "../components/CruptoChat";
import PriceManipulation from "../components/PriceManipulation";
import LiveBusiness from "../components/LiveBusiness";
import SocialMedia from "../components/SocialMedia";
import Signin from "./Signin";

const Home = () => {
  return (
    <div>
      <Banner />
      <Signin/>
      <div className="section-timeline container">
        <div className="timeline_card">
          <CruptoChat />
        </div>

        {/* <!-- 2nd section for timeline --> */}
        <div className="timeline_card">
          <PriceManipulation />
          <LiveBusiness />
        </div>

        {/* <!-- 3rd section for time line --> */}
        <div className="timeline_card">
          <SocialMedia />
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default Home;
