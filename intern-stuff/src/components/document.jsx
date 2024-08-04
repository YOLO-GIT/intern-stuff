import Image from "../assets/img-template.png";
import React from "react";
import Header from "./header";
import Socials from "./socials";
import Footer from "./footer";
import { DocHoverEffect } from "./tools/card-doc";

const Document = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-500">
        <DocHoverEffect />
      </div>
      {/* <Socials /> */}
      <Footer />
    </>
  );
};

export default Document;
