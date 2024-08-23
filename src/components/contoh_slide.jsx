import React from "react";
import Header from "./header";
import Footer from "./footer";
import Card from "./tools/card";
import { DisclaimerHighlight } from "./tools/highlight";

const Slide = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-200">
        <DisclaimerHighlight />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Slide;
