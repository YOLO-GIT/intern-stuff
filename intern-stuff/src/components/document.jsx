import Image from "../assets/img-template.png";
import React from "react";
import Header from "./header";
import Socials from "./socials";
import Footer from "./footer";
import { BentoGridDemo } from "./tools/bento";

const Document = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-50">
        <BentoGridDemo />
      </div>
      <Socials />
      <Footer />
    </>
  );
};

export default Document;
