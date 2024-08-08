import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Disclaimer } from "../tools/disclaimer";

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
            <Disclaimer />
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              <span className="font-bold text-red-500">Disclaimer:</span>{" "}
              <span className="font-bold">"KESIMPULAN"</span> di bawah hanya
              sekadar contoh dan boleh diubah suai atas kehendak anda. Tidak
              perlu <span className="font-bold">IKUT</span> 100% contohnya.
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              <h2 className="text-center mb-8 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white text-gray-900 sm:text-gray-900">
                Kesimpulan
              </h2>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Melalui pengalaman praktikal di [Tempat Firma Anda], saya telah
                memperoleh pemahaman yang mendalam tentang pelbagai aspek
                pengurusan dan pentadbiran. Pengalaman ini telah membekalkan
                saya dengan pengetahuan yang sangat berharga serta kemahiran
                yang penting untuk kerjaya masa depan. Dari pemerhatian terhadap
                prosedur pentadbiran hingga memahami kepentingan kerja
                berpasukan, setiap pengalaman telah memperkayakan pemahaman saya
                tentang dunia kerja yang sebenar.
              </p>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Selain itu, pengalaman ini telah menekankan betapa pentingnya
                penggunaan teknologi dalam menguruskan tugas-tugas pentadbiran.
                Saya belajar bagaimana untuk menggunakan pelbagai sistem dan
                perisian yang memudahkan proses kerja, menjadikannya lebih
                efisien dan teratur. Pengalaman ini telah memberi saya keyakinan
                dalam mengendalikan tugas-tugas menggunakan teknologi yang
                canggih dan membantu saya memahami betapa pentingnya kemahiran
                teknologi dalam dunia kerja masa kini.
              </p>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Saya juga menyedari bahawa pematuhan kepada dasar dan prosedur
                institusi adalah kritikal untuk memastikan ketelusan dan
                akauntabiliti. Pengalaman ini telah mengajar saya tentang
                tanggungjawab dan pentingnya mengikuti garis panduan yang
                ditetapkan. Kepatuhan ini bukan sahaja memastikan kelancaran
                operasi, tetapi juga memupuk budaya kerja yang beretika dan
                profesional.
              </p>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Akhir sekali, pengalaman ini telah membuka mata saya tentang
                kepentingan perkembangan profesional yang berterusan. Melihat
                bagaimana kakitangan sentiasa mencari peluang untuk meningkatkan
                kemahiran mereka telah memberi inspirasi kepada saya untuk
                sentiasa berusaha ke arah kecemerlangan. Keseluruhannya,
                pengalaman praktikal di [Tempat Firma Anda] telah memberi saya
                asas yang kukuh dalam bidang pentadbiran dan pengurusan, serta
                membentuk saya menjadi individu yang lebih bersedia untuk
                menghadapi cabaran dalam dunia pekerjaan.
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

export default bab_6;
