// src/components/Home.jsx
import React from "react";
import Header from "./header";
import Image from "../assets/img-template.png";
import Socials from "./socials";
import Footer from "./footer";
import { CardHoverEffect } from "./tools/card-hover";

const Statement = () => {
  return (
    <>
      <section class="bg-slate-50">
        <div class="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="ml-auto place-self-center lg:col-span-7 mt-5 sm:mt-0 rounded-md p-6">
            <h1 class="text-center sm:text-left max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Tentang Saya
            </h1>
            <p class="text-center sm:text-left mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Cuma orang biasa yang mempunyai pelbagai idea. Saya buat website
              ini kerana saya selalu nampak flow pelajar - pelajar lain
              membuat&nbsp;
              <span>Blogspot</span>&nbsp; atau &nbsp;<span>Wordpress</span>
              &nbsp; berkaitan praktikal mereka. (Jikalau ada sebab lain boleh
              emelkan info tersebut kepada saya.)
            </p>
          </div>
          <div class="lg:mt-0 lg:col-span-5 lg:flex mx-auto">
            <img
              class="rounded-2xl w-60 sm:w-96 transform transition-transform hover:scale-105 ease-out duration-500 hover:shadow-lg"
              src={Image}
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section className="bg-black">
        <CardHoverEffect />
      </section>

      <section class="bg-slate-50">
        <div class="container mx-auto px-4 py-8 lg:py-16">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div class="w-full">
              <img
                class="rounded-2xl w-60 sm:w-96 transform transition-transform hover:scale-105 ease-out duration-500 hover:shadow-lg"
                src={Image}
                alt="mockup"
              />
            </div>
            <div class="flex flex-col justify-center mt-5 sm:mt-0">
              <h1 class="text-center sm:text-right max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
                Ingin support saya?
              </h1>
              <p class="text-center sm:text-right mt-6 font-semibold text-black md:text-lg max-w-lg">
                Give me money 🤑
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statement;
