import React from "react";
import Header from "../header";
import Footer from "../footer";

const bab_3 = () => {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-slate-900 w-full h-full">
        <div className="px-8 py-4 mx-auto">
          <div className="lg:col-span-7 mt-5 sm:mt-0 rounded-md p-14">
            <h1 className="text-center mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Bab Tiga
            </h1>
            <div className="text-center mb-6 text-gray-500 dark:text-gray-400">
              <p className="font-medium">By [YOLO - GIT]</p>
            </div>
            <p className="mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Hint: <br />
              - Biasa 😂 (Jikalau anda fokus.).
              <br />
              - Isi berkaitan Tugas Harian di dalam Mingguan anda (Letak sahaja
              tetapi biar ada sedikit kaitan dengan program anda.).
              <br />
              - Senaraikannya ikut susunan seperti ini: <br />
              i. Pengenalan
              <br />
              ii. Ringkasan aktiviti semasa latihan industri
              <br />
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Bahagian ini sangat mudah tetapi berisiko sekiranya anda tidak
              mula dari awal. (Ingat! Anda hanya perlu senaraikan
              <span className="font-bold">&nbsp;kesemua/separuh</span> tugasan
              harian yang anda telah lakukan di dalam
              <span className="font-bold">&nbsp;MINGGU</span> tersebut.)
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              <span className="font-bold text-red-500">Disclaimer:</span>&nbsp;
              <span className="font-bold">[letak link]</span> Link yang diberi
              adalah sekadar contoh dan boleh diubah suai atas kehendak anda.
              Tidak perlu <span className="font-bold">IKUT</span> 100%
              contohnya.
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default bab_3;
