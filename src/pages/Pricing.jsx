import React, { useRef } from "react";
import Faq from "../components/Faq";
import PriceBanner from "../components/PriceBanner";
import FreePro from "../components/FreePro";
import Header from "../components/Header";

const Pricing = () => {

const signinRef = useRef()

const clickHand = () => {
  signinRef.current.click()
}

  return (
    <div>
      <Header signinRef={signinRef} />
      <PriceBanner />
      <FreePro clickedHandlerRef={clickHand} />
      <Faq />
    </div>
  );
};

export default Pricing;
