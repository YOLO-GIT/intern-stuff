import React from "react";
import Header from "./header";
import Image from "../assets/img-template.png";
import Socials from "./socials";
import Footer from "./footer";
import Pin from "./tools/pin";

const Note = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-50">
        <Pin />
      </div>
      {/* <Socials /> */}
      <Footer />
    </>
  );
};

export default Note;
