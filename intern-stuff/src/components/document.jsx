import Image from "../assets/img-template.png";
import React from "react";
import Header from "./header";
import Socials from "./socials";
import Footer from "./footer";
import New_Card from "./tools/card";
import { BentoGridDemo } from "./tools/bento";

const Document = () => {
  return (
    <>
      <Header />
      <BentoGridDemo />
      <Socials />
      <Footer />
    </>
  );
};

export default Document;
