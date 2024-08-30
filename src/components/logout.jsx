import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Error_One from "../assets/error404.png";

const Logout = () => {
  useEffect(() => {
    console.log("url");
  }, []);
  return (
    <>
      <Header />
      <img
        className="w-full h-full object-container"
        src={Error_One}
        alt="there is nothing to see here"
      />
      <Footer />
    </>
  );
};

export default Logout;
