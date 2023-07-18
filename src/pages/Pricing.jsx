import React from "react";
import Faq from "../components/Faq";
import PriceBanner from "../components/PriceBanner";
import FreePro from "../components/FreePro";

const Pricing = () => {
  return (
    <div>
      <PriceBanner />
      <FreePro />
      <Faq />
    </div>
  );
};

export default Pricing;
