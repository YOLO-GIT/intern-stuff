// src/components/Home.jsx
import React from "react";
import Header from "./header";
import Image from "../assets/img-template.png";
import Socials from "./socials";
import Footer from "./footer";
import { Typewriter } from "./tools/typewriter";

const Home = () => {
  return (
    <>
      <Header />
      <section class="bg-slate-200">
        <div class="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="ml-auto place-self-center lg:col-span-7 mt-5 sm:mt-0 rounded-md p-6">
            <h1 class="text-center sm:text-left max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Introduction
            </h1>
            <p class="text-center sm:text-left mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Hello pelajar - pelajar praktikal! Selamat datang ke...
              <div className="hidden sm:flex">
                <Typewriter />
              </div>
              <div className="sm:hidden font-bold underline">
                PRAKTIKAL ARCHIVE
              </div>
              Di sini, anda akan dapat info cara - cara mendokumentasikan
              perkara yang melibatkan tugasan anda di firma dan cara - cara
              mencatatkannya. (Tidak termasuk perkara seperti: format institusi
              anda dan firma yang anda pilih).
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

      <section class="bg-black">
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
              <h1 class="text-center sm:text-right max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-300">
                Important thing to know.
              </h1>
              <p class="text-center sm:text-right mt-6 font-semibold text-gray-200 md:text-lg max-w-lg">
                Laman web ini hanya untuk mengarchive dokumen yang saya
                (YOLO-GIT) buat. Tetapi anda boleh menggunakan sumber yang saya
                telah dokumentasikan dengan tujuan mengetahui cara-cara membuat
                report pratikal tanpa rasa gelisah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Socials /> */}
      <Footer />
    </>
  );
};

export default Home;
