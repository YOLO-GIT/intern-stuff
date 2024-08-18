import React from "react";
import Header from "./header";
import Footer from "./footer";
import Pin from "./tools/pin";

const Note = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-200">
        <Pin />
      </div>
      {/* <Socials /> */}
      <Footer />
    </>
  );
};

export default Note;
