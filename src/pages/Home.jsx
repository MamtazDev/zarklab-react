import React from "react";
import Faq from "../components/Faq";
import Banner from "../components/Banner";
import CruptoChat from "../components/CruptoChat";
import PriceManipulation from "../components/PriceManipulation";
import LiveBusiness from "../components/LiveBusiness";
import SocialMedia from "../components/SocialMedia";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
    // variants={{
    //   hidden: { opacity: 0, y: 100 },
    //   visible: { opacity: 1, y: 0 },
    // }}
    // initial="hidden"
    // animate="visible"
    // transition={{ duration: 0.5, delay: 0.25 }}
    //  data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear"
    >
      <Banner />
      <div className="section-timeline container">
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="linear"
          className="timeline_card"
        >
          <CruptoChat />
        </div>

        {/* <!-- 2nd section for timeline --> */}
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          // data-aos-easing="linear"
          className="timeline_card"
        >
          <PriceManipulation />
          <LiveBusiness />
        </div>

        {/* <!-- 3rd section for time line --> */}
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="linear"
          className="timeline_card"
        >
          <SocialMedia />
        </div>
      </div>
      <Faq />
    </motion.div>
  );
};

export default Home;
