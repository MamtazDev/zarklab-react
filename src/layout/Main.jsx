import React, { useContext, useEffect, useRef } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import useIsSignedIn from "../hooks/useIsSignedIn";

const Main = () => {
  const signinRef = useRef();

  const { setUser } = useContext(AuthContext);

  const location = useLocation();
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const authChecked = useIsSignedIn();

  return authChecked ? (
    <>
      <ScrollToTop />
      {location.pathname !== "/pricing" && <Header signinRef={signinRef} />}
      <Outlet />
      <Footer />
    </>
  ) : (
    ""
  );
};

export default Main;
