import React from "react";
import Header from "./header";
import Image from "../assets/img-template.png";
import Socials from "./socials";
import Footer from "./footer";
import Card from "./tools/card";

const Slide = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-200">
        <Card />
      </div>
      {/* <Socials /> */}
      <Footer />
    </>
  );
};

export default Slide;
