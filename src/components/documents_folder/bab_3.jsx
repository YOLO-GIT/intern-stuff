import React from "react";
import Header from "../header";
import Footer from "../footer";
import TC from "../../documents/TC.pdf";
import Bab_3 from "../../documents/bab_3.pdf";

const Bab_3 = () => {
  return (
    <>
      <Header />
      <section className="bg-slate-200 w-full h-full">
        <div className="px-8 py-4 mx-auto">
          <div className="lg:col-span-7 mt-5 sm:mt-0 rounded-md p-14">
            <h1 className="text-center mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Bab Tiga
            </h1>
            <div className="text-center mb-6 text-gray-500 dark:text-gray-400">
              <p className="font-medium">By [YOLO - GIT]</p>
            </div>
            <p className="mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Hint: <br />- Biasa 😂&nbsp;
              <span className="font-bold italic">(Jikalau anda fokus.)</span>.
              <br />- Isi berkaitan Tugas Harian di dalam Mingguan anda&nbsp;
              <span className="font-bold italic">
                (Letak sahaja tetapi biar ada sedikit kaitan dengan program
                anda.)
              </span>
              .
              <br />
              - Senaraikannya ikut susunan seperti ini: <br />
              i. Pengenalan
              <br />
              ii. Ringkasan aktiviti semasa latihan industri
              <br />
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Bahagian ini sangat mudah tetapi berisiko sekiranya anda tidak
              mula dari awal. (Ingat! Anda hanya perlu senaraikan&nbsp;
              <span className="font-bold">kesemua/separuh</span>&nbsp;tugasan
              harian yang anda telah lakukan di dalam&nbsp;
              <span className="font-bold">MINGGU</span>&nbsp;tersebut.)
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              <span className="font-bold text-red-500">Disclaimer:</span>&nbsp;
              <span className="font-bold">
                [
                <a
                  href={Bab_3} // Replace with the desired page number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Contoh Bab 3
                </a>
                ]
              </span>
              &nbsp;Link yang diberi adalah sekadar contoh dan boleh diubah suai
              atas kehendak anda. Tidak perlu&nbsp;
              <span className="font-bold">IKUT</span>
              &nbsp;100% contohnya. Sila rujuk [
              <a
                href={TC} // Replace with the desired page number
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Terma & Syarat
              </a>
              ] untuk mengetahui dengan lebih lanjut.
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Bab_3;
