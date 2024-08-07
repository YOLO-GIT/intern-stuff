import React from "react";
import Header from "../header";
import Footer from "../footer";
import CreepyDisclaimer from "./Disclaimer";

const bab_6 = () => {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-slate-900 w-full h-full">
        <div className="px-8 py-4 mx-auto">
          <div className="lg:col-span-7 mt-5 sm:mt-0 rounded-md p-14">
            <h1 className="text-center mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Bab Enam
            </h1>
            <div className="text-center mb-6 text-gray-500 dark:text-gray-400">
              <p className="font-medium">By [YOLO - GIT]</p>
            </div>
            <p className="mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Hint: <br />
              - Turu 🛌.
              <br />
              - Kesimpulan
              <br />
              - Senaraikannya ikut susunan seperti ini: <br />
              i. Kesimpulan
              <br />
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Kesimpulan
            </p>
            <CreepyDisclaimer />
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default bab_6;
