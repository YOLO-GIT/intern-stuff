import React from "react";
import Header from "../header";
import Footer from "../footer";

const Bab_1 = () => {
  return (
    <>
      <Header />
      <section className="bg-slate-200 w-full h-full">
        <div className="px-8 py-4 mx-auto">
          <div className="lg:col-span-7 mt-5 sm:mt-0 rounded-md p-14">
            <h1 className="text-center mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Bab Satu
            </h1>
            <div className="text-center mb-6 text-gray-500 dark:text-gray-400">
              <p className="font-medium">By [YOLO - GIT]</p>
            </div>
            <p className="mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Hint: <br />
              - Agak sukar sedikit.
              <br />
              - Isi berkaitan tujuan LI (Fakta bukan rekaan!).
              <br />
              - Senaraikannya ikut susunan seperti ini: <br />
              i. Pengenalan <br />
              ii. Objektif Latihan Industri
              <br />
              iii. Objektif Laporan Akhir
              <br />
              iv. Kepentingan Latihan Industri Kepada Pelajar
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Isi yang lain anda boleh cari di dalam Internet tetapi saya akan
              kongsikan contoh <span className="font-bold">[Pengenalan]</span>
              .&nbsp;
              <span className="italic">
                (Ingat! Contoh di dalam Internet boleh di-copy tetapi masih
                perlu diubah usai untuk mengelakkan dari ditangkap plagiat.)
              </span>
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              <span className="font-bold text-red-500">Disclaimer:</span>&nbsp;
              <span className="font-bold">"PENGENALAN"</span> di bawah hanya
              sekadar contoh dan boleh diubah suai atas kehendak anda. Tidak
              perlu <span className="font-bold">IKUT</span> 100% contohnya.
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              <h2 className="text-center mb-8 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white text-gray-900 sm:text-gray-900">
                Pengenalan
              </h2>
              <p className="mb-6 text-center sm:text-left text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Latihan Industri merupakan satu komponen utama dalam kurikulum
                pembelajaran&nbsp;
                <span className="font-bold underline italic">
                  [PENGAJIAN ANDA (cth: "Politeknik Kementerian Pengajian Tinggi
                  (PKPT)")]
                </span>
                &nbsp;.Pelajar disyaratkan lulus latihan industri sebelum
                diperakukan untuk penganugerahan&nbsp;
                <span className="font-bold underline italic">
                  [DIPLOMA ANDA]
                </span>
                &nbsp;.Pelajar akan ditempatkan di organisasi tertentu selama
                satu semester bagi mendedahkan mereka kepada suasana alam
                pekerjaan yang sebenar. Pelajar juga diberi pilihan untuk
                memilih firma yang dikehendakinya untuk menjalani Latihan
                Industri. Latihan Industri ini dijalankan pada&nbsp;
                <span className="font-bold underline italic">
                  [SEMESTER ANDA (JIKALAU DEGREE)]
                </span>
                &nbsp;bagi kursus peringkat&nbsp;
                <span className="font-bold underline italic">
                  [PROGRAM ANDA]
                </span>
                &nbsp;.
              </p>
              <p className="mb-6 text-center sm:text-left text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Saya,&nbsp;
                <span className="font-bold underline italic">[NAMA ANDA]</span>
                &nbsp;, pelajar yang mengambil&nbsp;
                <span className="font-bold underline italic">
                  [KURSUS/PROGRAM ANDA]
                </span>
                &nbsp;di&nbsp;
                <span className="font-bold underline italic">
                  [INSTITUSI ANDA]
                </span>
                &nbsp;sebagai pelajar&nbsp;
                <span className="font-bold underline italic">
                  [INSTITUSI ANDA]
                </span>
                &nbsp;mesti lulus dalam semester enam iaitu Latihan Industri,
                para pelajar akan dihantar ke pelbagai organisasi kerajaan atau
                swasta.
              </p>
              <p className="mb-6 text-center text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Sebarang masalah berkaitan tempat Latihan Industri hendaklah
                dibincangkan dengan pihak majikan dan sebarang keputusan
                muktamad hanya akan dilaksanakan oleh pihak&nbsp;
                <span className="font-bold underline italic">
                  [INSTITUSI ANDA]
                </span>
                &nbsp;apabila diminta berbuat demikian oleh pihak majikan
                tersebut.
              </p>
              <p className="mb-6 text-center sm:text-left text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Tempoh yang ditetapkan kepada pelajar-pelajar untuk menjalani
                Latihan Industri di sesebuah firma ialah selama&nbsp;
                <span className="font-bold underline italic">
                  [BULAN YANG ANDA PELU HADAPI]
                </span>
                &nbsp; bermula dari&nbsp;
                <span className="font-bold underline italic">
                  [TARIKH MULA DAN HABIS LI ANDA]
                </span>
                &nbsp;.
              </p>
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Bab_1;
