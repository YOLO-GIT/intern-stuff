import React from "react";
import Header from "../header";
import Footer from "../footer";

const bab_4 = () => {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-slate-900 w-full h-full">
        <div className="px-8 py-4 mx-auto">
          <div className="lg:col-span-7 mt-5 sm:mt-0 rounded-md p-14">
            <h1 className="text-center mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Bab Empat
            </h1>
            <div className="text-center mb-6 text-gray-500 dark:text-gray-400">
              <p className="font-medium">By [YOLO - GIT]</p>
            </div>
            <p className="mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Hint: <br />- Sukar&nbsp;
              <span className="font-bold italic">
                (Bab PALING penting sekali).
              </span>
              <br />- Isi berkaitan Projek yang anda telah bangunkan untuk firma
              anda.&nbsp;
              <span className="font-bold italic">
                (Contoh: Laman Web, Multimedia, Reka Bentuk, dan perkara -
                perkara yang lain berdasarkan program yang anda ceburi.).
              </span>
              <br />
              - Senaraikannya ikut susunan seperti ini: <br />
              i. Pengenalan
              <br />
              ii. Bab - bab lain&nbsp;
              <span className="font-bold italic">
                (PROJEK anda! Satu Projek = Satu BAB.)
              </span>
              <br />
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Bahagian ini sangat sukar&nbsp;
              <span className="font-bold italic text-blue-500">
                (Bagi Saya)
              </span>
              &nbsp;kerana isinya perlu berkait dengan perkara yang anda lakukan
              di dalam firma tersebut. (Ingat! Projek yang anda perlu letak
              dalam&nbsp;
              <span className="font-bold">Dua/Tiga</span>&nbsp;Projek,
              tetapi&nbsp;
              <span className="font-bold">LEBIH</span>&nbsp;banyak projek lagi
              bagus.)
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              <span className="font-bold text-red-500">Disclaimer:</span>&nbsp;
              <span className="font-bold">[letak link]</span>&nbsp;Link yang
              diberi adalah sekadar contoh dan boleh diubah suai atas kehendak
              anda. Tidak perlu&nbsp;<span className="font-bold">IKUT</span>
              &nbsp;100% contohnya.
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default bab_4;
