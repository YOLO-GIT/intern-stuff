import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Logo from "../../assets/logo.png";
import Image_1 from "../../assets/panduan.png";
import Image_2 from "../../assets/aniq.png";
import Image_3 from "../../assets/amili.png";
import Image_4 from "../../assets/ajim.png";
import Empty_spot from "../../assets/empty_spot.png";
import First_pdf from "../../documents/contoh-format-penulisan-laporan-li-terkini.pdf";
import Full_pdf from "../../documents/teknikal_50.pdf";
import Second_pdf from "../../documents/second_example.pdf";
import Third_pdf from "../../documents/third_example.pdf";
import Fourth_pdf from "../../documents/fourth_example.pdf";
import TC from "../../documents/TC.pdf";

const Pin = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-8">
        {/* Panduan */}
        <div className="h-[40rem] w-full flex items-center justify-center">
          <PinContainer
            title="Panduan yang boleh diikuti"
            href={First_pdf} // Replace with your PDF file path
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Panduan Asas
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  Disclaimer: Kemungkinan contoh panduan yang diberi berbeza
                  dengan panduan lain.
                </span>
              </div>
              <img
                className="w-90 rounded-lg mt-4"
                src={Image_1}
                alt="panduan"
              />
            </div>
          </PinContainer>
        </div>

        {/* Sufi */}
        <div className="h-[40rem] w-full flex items-center justify-center">
          <PinContainer
            title="Contoh Report Penuh #1"
            href={Full_pdf} // Replace with your PDF file path
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Contoh Report
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  Disclaimer: Gunakan Report ini untuk rujukan sahaja. (
                  <a
                    href={TC} // Replace with the desired page number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Terms & Condition
                  </a>
                  )
                </span>
              </div>
              <img className="w-90 rounded-lg mt-4" src={Logo} alt="YOLO_GIT" />
            </div>
          </PinContainer>
        </div>

        {/* Aniq */}
        <div className="h-[40rem] w-full flex items-center justify-center">
          <PinContainer
            title="Contoh Report Penuh #2"
            href={Second_pdf} // Replace with your PDF file path
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Contoh Report #2
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  Credit: @ <br /> (
                  <a
                    href={TC} // Replace with the desired page number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Terms & Condition
                  </a>
                  )
                </span>
              </div>
              <img className="w-90 rounded-lg mt-4" src={Image_2} alt="aniq" />
            </div>
          </PinContainer>
        </div>

        {/* Amili */}
        <div className="h-[40rem] w-full flex items-center justify-center">
          <PinContainer
            title="Contoh Report Penuh #3"
            href={Third_pdf} // Replace with your PDF file path
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Contoh Report #3
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  Credit: @~Lilian (MLBB) <br /> (
                  <a
                    href={TC} // Replace with the desired page number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Terms & Condition
                  </a>
                  )
                </span>
              </div>
              <img className="w-90 rounded-lg mt-4" src={Image_3} alt="limi" />
            </div>
          </PinContainer>
        </div>

        {/* Azim */}
        <div className="h-[40rem] w-full flex items-center justify-center">
          <PinContainer
            title="Contoh Report Penuh #4"
            href={Fourth_pdf} // Replace with your PDF file path
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Contoh Report #4
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  Credit: @azimazimazim <br /> (
                  <a
                    href={TC} // Replace with the desired page number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Terms & Condition
                  </a>
                  )
                </span>
              </div>
              <img className="w-90 rounded-lg mt-4" src={Image_4} alt="bruh" />
            </div>
          </PinContainer>
        </div>

        <div className="h-[40rem] w-full flex items-center justify-center">
          <PinContainer title="Contoh Report Penuh #5">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Empty Spot
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  Credit: @ <br /> (
                  <a
                    href={TC} // Replace with the desired page number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Terms & Condition
                  </a>
                  )
                </span>
              </div>
              <img className="w-90 rounded-lg mt-4" src={Empty_spot} alt="es" />
            </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
};

export default Pin;
