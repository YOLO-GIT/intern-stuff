import React from "react";
import Header from "./header";
import Footer from "./footer";
import Pin from "./tools/pin";
import { DisclaimerHighlight } from "./tools/highlight";

const Note = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-200">
        <DisclaimerHighlight />
        <Pin />
      </div>
      <Footer />
    </>
  );
};

export default Note;
