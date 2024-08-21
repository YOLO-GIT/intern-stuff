import React from "react";
import Header from "../header";
import Footer from "../footer";
import TC from "../../documents/TC.pdf";
import Bab_2 from "../../documents/bab_2.pdf";

const Bab_2 = () => {
  return (
    <>
      <Header />
      <section className="bg-slate-200 w-full h-full">
        <div className="px-8 py-4 mx-auto">
          <div className="lg:col-span-7 mt-5 sm:mt-0 rounded-md p-14">
            <h1 className="text-center mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Bab Dua
            </h1>
            <div className="text-center mb-6 text-gray-500 dark:text-gray-400">
              <p className="font-medium">By [YOLO - GIT]</p>
            </div>
            <p className="mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Hint: <br />
              - Agak sukar.
              <br />- Isi berkaitan latar belakang Firma Anda&nbsp;
              <span className="font-bold underline italic">
                (Fakta bukan rekaan! dan anda perlu membuat rujukan!)
              </span>
              &nbsp; .
              <br />
              - Senaraikannya ikut susunan seperti ini: <br />
              i. Pengenalan Firma
              <br />
              ii. Latar Belakang Penubuhan Firma
              <br />
              iii. Ahli Lembaga Pengarah&nbsp;
              <span className="font-bold underline italic">
                (Subtopik: 1. Aktiviti Firma, 2. Halatuju Firma, 3. Carta
                Organisasi Firma, 4. Jadual Waktu Operasi)
              </span>
              &nbsp;
              <br />
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Isi yang lain anda boleh cari di dalam Internet&nbsp;
              <span className="font-bold underline italic">
                [Jikalau firma anda mempunyai Website atau sebarang dokumen
                berkaitan mereka.]
              </span>
              &nbsp; Atau merujuk penyelia anda.&nbsp;
              <span className="italic">
                (Ingat! Contoh di dalam Internet boleh di-copy tetapi masih
                perlu diubah usai untuk memastikan fakta yang anda huraikan
                lebih panjang.)
              </span>
              &nbsp;
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              <span className="font-bold text-red-500">Disclaimer:</span>&nbsp;
              <span className="font-bold">
                [
                <a
                  href={Bab_2} // Replace with the desired page number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Contoh Bab 2
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

export default Bab_2;
