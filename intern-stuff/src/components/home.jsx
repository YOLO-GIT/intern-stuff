// src/components/Home.jsx
import React from "react";
import Header from "./header";
import Image from "../assets/img-template.png";
import Socials from "./socials";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Header />
      <section class="bg-white dark:bg-slate-500">
        <div class="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="ml-auto place-self-center lg:col-span-7 mt-5 sm:mt-0 rounded-md p-6 sm:hover:bg-slate-100 sm:hover:shadow-lg sm:hover:scale-105 transform transition-transform duration-500 ease-out">
            <h1 class="text-center sm:text-left max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Happy Eid al-Adha!
            </h1>
            <p class="text-center sm:text-left mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              This Hajj / Aidil Adha holiday is also known as Hari Raya Korban
              in Malaysia. The sacrificial worship performed on Hari Raya
              Aidiladha is for Muslims to commemorate the story of the sacrifice
              of Prophet Ibrahim a.s. who was willing to sacrifice his son Nabi
              Ismail because of his obedience to Allah S.W.T.
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
                The tradition during Hari Raya Aidiladha involves slaughtering
                animals and dividing the meat into three equal parts - for
                family, for relatives and friends, and for the poor. The purpose
                is to ensure that every Muslim can eat meat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Socials />
      <Footer />
    </>
  );
};

export default Home;
