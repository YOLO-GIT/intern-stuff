// src/components/Home.jsx
import React from "react";
import Header from "./header";
import Footer from "./footer";
import TC from "../documents/TC.pdf";
import { Typewriter } from "./tools/typewriter";
import Image_One from "../assets/img_one.gif";
import Image_Two from "../assets/warning.png";
import Image_Three from "../assets/tc.jpg";

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
              mencatatkannya.
            </p>
          </div>
          <div class="lg:mt-0 lg:col-span-5 lg:flex mx-auto">
            <img
              class="rounded-2xl w-60 sm:w-96 transform transition-transform hover:scale-105 ease-out duration-500 hover:shadow-lg"
              src={Image_One}
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section class="bg-black">
        <div class="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="lg:mt-0 lg:col-span-5 lg:flex">
            <img
              class="mx-auto sm:mx-0 rounded-2xl w-60 sm:w-96 transform transition-transform hover:scale-105 ease-out duration-500 hover:shadow-lg"
              src={Image_Two}
              alt="mockup"
            />
          </div>
          <div class="mr-auto lg:col-span-7 mt-5 sm:mt-0 rounded-md p-6">
            <h1 class="text-center sm:text-right mx-auto max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-300">
              Important thing to know.
            </h1>
            <p class="text-center sm:text-right mb-6 font-semibold text-white md:text-lg">
              Laman web ini hanya untuk mengarchive dokumen yang saya (YOLO-GIT)
              buat. Tetapi anda boleh menggunakan sumber yang saya telah
              dokumentasikan dengan tujuan mengetahui cara-cara membuat report
              pratikal tanpa rasa gelisah.
            </p>
          </div>
        </div>
      </section>

      <section class="bg-slate-200">
        <div class="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="ml-auto lg:col-span-7 mt-5 sm:mt-0 rounded-md p-6">
            <h1 class="text-center sm:text-left max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Terms & Condition
            </h1>
            <p class="text-center sm:text-left mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Sila baca terma dan syarat berikut dengan teliti sebelum
              menggunakan laman web ini [
              <a
                href={TC} // Replace with the desired page number
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Terms & Condition
              </a>
              ]. Dengan mengakses bahan dan kandungan di sini, anda bersetuju
              untuk mematuhi syarat yang ditetapkan. Laman web ini menyediakan
              panduan dan contoh laporan&nbsp;
              <span className="font-bold">Latihan Industri</span>&nbsp;untuk
              tujuan pembelajaran dan rujukan. Sebarang penggunaan maklumat di
              luar skop pendidikan, anda perlu rujuk dengan guru atau pensyarah
              institusi anda.
            </p>
          </div>
          <div class="lg:mt-0 lg:col-span-5 lg:flex mx-auto">
            <img
              class="rounded-2xl w-60 sm:w-96 transform transition-transform hover:scale-105 ease-out duration-500 hover:shadow-lg"
              src={Image_Three}
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
