import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Details from "../components/Details";
import LogSign from "../components/Login/LogSign";
import { useMainDashContext } from "../context/AppContext";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";
const Home = () => {
  const cookie = Cookies.get("user");
  // console.log(cookie);
  const { openlogin, setOpenlogin } = useMainDashContext();
  return (
    <>
      <div className="w-full flex items-center flex-col justify-center">
        {cookie ? (
          <></>
        ) : (
          <>
            {openlogin && <LogSign />}
            {/* <HeroSection /> */}
          </>
        )}
        {/* {openlogin && <LogSign />} */}
        <HeroSection />
        <Details />
      </div>
    </>
  );
};

export default Home;
