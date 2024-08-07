import React from "react";
import Header from "../header";
import Footer from "../footer";

const BlogPost = () => {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-slate-900 w-full h-full">
        <div className="px-8 py-4 mx-auto">
          <div className="lg:col-span-7 mt-5 sm:mt-0 rounded-md p-14">
            <h1 className="text-center mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-900 sm:text-gray-900">
              Introduction
            </h1>
            <div className="text-center mb-6 text-gray-500 dark:text-gray-400">
              <p className="font-medium">By [YOLO - GIT]</p>
            </div>
            <p className="mb-6 font-semibold dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Hint: <br />
              - Easy sahaja.
              <br />
              - Ikut panduan.
              <br />
              - Senaraikannya ikut susunan seperti ini: <br />
              i. Pengesahan Pelajar <br />
              ii. Surat Tamat Latihan
              <br />
              iii. Penghargaan
              <br />
              iv. Kesemua Senarai (Kandungan, Jadual, Rajah Lampiran)
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              Perkara yang saya boleh share pada mula - mula ini adalah ayat
              penghargaan sahaja kot. Sebab yang lain tuh anda boleh buat
              sendiri. (Saya percayakan anda 🗣️🔥)
            </p>
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              <span className="font-bold text-red-500">Disclaimer:</span>{" "}
              <span className="font-bold">"PENGHARGAAN"</span> di bawah hanya
              sekadar contoh dan boleh diubah suai atas kehendak anda. Tidak
              perlu <span className="font-bold">IKUT</span> 100% contohnya.
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
            <p className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
              <h2 className="text-center mb-8 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white text-gray-900 sm:text-gray-900">
                Penghargaan
              </h2>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Bismillahirahmanirahim. Assalamualaikum W.B.T..
              </p>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Alhamdulillah, Segala puji-pujian bagi Allah, Tuhan sekelian
                alam. Selawat dan salam ke atas Nabi Muhammad S.A.W, seluruh
                keluarga baginda, para sahabat baginda dan waris keturunan
                baginda. Syukur kehadrat Ilahi kerana dengan limpah kurnia-Nya
                berjaya saya siapkan Laporan Akhir Latihan Industri ini.
              </p>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Setinggi-tinggi penghargaan saya ucapkan kepada pihak pengurusan
                [Firma Anda] kerana telah memberi peluang saya menjalankan
                latihan industri selama 20 minggu. Khasnya buat [SV anda] kerana
                memberi saya peluang untuk menimba pengalaman dan menguruskan
                hal saya selama menjalani latihan industri di organisasi ini.
              </p>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Selain itu, [Staf Firma] kerana beliau juga telah banyak
                membantu saya dalam semua aspek semasa menjalankan kerja-kerja
                di organisasi ini dari awal latihan sehingga saya tamat latihan
                [Tarikh last intern]. Tidak lupa juga kepada staf-staf di bawah
                [Firma Anda] yang banyak memberi tunjuk ajar tentang selok-belok
                pengurusan [Firma Anda].
              </p>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Saya juga ingin mengucapkan jutaan terima kasih kepada pihak
                Unit Latihan Industri [Institusi Anda] yang banyak membantu dari
                penyediaan sebelum dan selepas menjalani latihan industri dan
                penyediaan laporan latihan industri.
              </p>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Tidak lupa juga kepada kedua ibu bapa saya yang telah memberikan
                dorongan dan sokongan yang padu kepada saya untuk menyiapkan
                buku laporan dan menamatkan latihan industri selama 6 bulan.
              </p>
              <p className="mb-6 text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Segala latihan yang saya pernah mungkin tidak dapat saya kutip
                tanpa kerjasama yang baik daripada seluruh kakitangan. Terima
                kasih kepada semua warga kerja [Staf] kerana sanggup meluangkan
                masa untuk memberi tunjuk ajar walaupun sibuk menjalankan tugas
                harian.
              </p>
              <p className="text-lg dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Akhir kata, hanya kepada Allah Taala sahaja saya serahkan segala
                urusan, semoga kita semua diberi taufiq dan hidayat untuk menuju
                ke jalan yang benar iaitu jalan yang diredhai di dunia dan di
                akhirat.
              </p>
              <p className="text-center font-extrabold mt-8 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg">
                Sekian, Terima Kasih
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

export default BlogPost;
